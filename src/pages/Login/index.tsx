import { useNavigate } from "react-router-dom";
import { InputForm, ContainerForm, LabelForm, LoginButton } from "./styles";
import { useForm } from "@mantine/form";

export const LoginForm: React.FC = () => {
    const navigate = useNavigate()
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        }
      });

    return(
        <ContainerForm className="container">
            <div className="wrapper">
                <h1>Login</h1>
                <form action="" onSubmit={form.onSubmit(() => console.log(form.values))}>
                    <div>
                        <LabelForm htmlFor="username">
                            Usuário
                        </LabelForm>
                        <InputForm 
                            type="text" 
                            id="username"
                            name="username"
                            {...form.getInputProps('username')}
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
                    
                    
                    <LoginButton onClick={() => navigate("/admin/solicitations")}>Entrar</LoginButton>
                </form>
            </div>
        </ContainerForm>
    )
}