import { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { InputForm, ContainerForm, LabelForm, LoginButton, ErrorMessage } from "./styles";
import { useForm } from "@mantine/form";
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useToken } from '../../hooks/useToken';
import { AxiosError } from 'axios';

export const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const { updateToken } = useToken();
    const [error, setError] = useState('');
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        }
      });

    const handleSubmit = useCallback(async (): Promise<void> => {
        try {
          setError('')
          const { password, email } = form.values;

          const response = await api.post('/auth', {
            email,
            password,
          });
    
          if (response.data) {
            updateToken(response.data.token);
            navigate('/admin/solicitations');
          }
        } catch (error) {
            const err = error as AxiosError;
            (err.response?.status === 404) ? setError('NOT_FOUND') : setError('BAD_REQUEST')
        }
      }, [form.values, updateToken, navigate]);  

    return(
        <ContainerForm className="container">
            <div className="wrapper">
                <h1>Login</h1>
                <form action="" onSubmit={form.onSubmit(() => console.log(form.values))}>
                    <div>
                        <LabelForm htmlFor="email">
                            Email
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="email"
                            name="email"
                            {...form.getInputProps('email')}
                        />
                    </div>
                    <div>
                        <LabelForm htmlFor="password">
                            Senha
                        </LabelForm>
                        <InputForm 
                        type="password" 
                        id="password"
                        name="password"
                        {...form.getInputProps('password')}    
                    />
                    </div>
                    {
                        error === 'NOT_FOUND' && <ErrorMessage>USUÁRIO NÃO ENCONTRADO</ErrorMessage>
                    }
                    {
                        error === 'BAD_REQUEST' && <ErrorMessage>OErrorMessages, ocorreu um erro!</ErrorMessage>
                    }
                    <LoginButton onClick={async () => await handleSubmit()}>Entrar</LoginButton>
                </form>
            </div>
        </ContainerForm>
    )
}