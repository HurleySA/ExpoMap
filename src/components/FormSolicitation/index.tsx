import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getInitialValueAdministratorSolicitation } from './utils';
import { api } from '../../services/api';
import { toast } from 'react-toastify';


export const FormSolicitation: React.FC = () => {
  const initialValues = getInitialValueAdministratorSolicitation();
  const form = useForm({
    initialValues
  });

  const handleSubmit = async (values: any) => {
    try {
      await api.post('/solicitation', values);
      toast.success("Solicitação enviada com sucesso!")
      form.reset();
    } catch (err){
      toast.error("Erro ao enviar solicitação!")
    }
  }

  return (
    <form onSubmit={form.onSubmit( async () => await handleSubmit(form.values)) }>
      <Title
        order={2}
        size="h1"
        weight={900}
        align="center"
      >
        Solicite seu evento no ExpoMap
      </Title>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Nome do evento"
          placeholder="Nome do evento"
          name="eventName"
          variant="filled"
          {...form.getInputProps('eventName')}
        />
        <TextInput
          label="Email"
          placeholder="Seu email"
          name="emailAdmin"
          variant="filled"
          {...form.getInputProps('emailAdmin')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Telefone"
          placeholder="Seu telefone"
          name="phoneAdmin"
          variant="filled"
          {...form.getInputProps('phoneAdmin')}
        />

        <Select 
            label="Qual o tipo do evento?"
            data={[
                {value: 'FREE', label: 'Grátis'},
                {value: 'HYBRID', label: 'Pago parcialmente'},
                {value: 'PAID', label: 'Pago'},
            ]}
            mt="md"
            name="typeEntrance"
            variant="filled"
            {...form.getInputProps('typeEntrance')}
        />
      </SimpleGrid>

      <Textarea
        mt="md"
        label="Explique em detalhes o seu evento."
        placeholder="Detalhe seu evento."
        maxRows={10}
        minRows={5}
        autosize
        name="detailsEvent"
        variant="filled"
        {...form.getInputProps('detailsEvent')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md" color='green'>
          Solicitar
        </Button>
      </Group>
    </form>
  );
}