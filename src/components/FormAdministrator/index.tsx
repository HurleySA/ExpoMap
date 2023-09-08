import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getInitialValueAdministrator } from './utils';

export const FormAdministrator: React.FC = () => {
  const initialValues = getInitialValueAdministrator();
  const form = useForm({
    initialValues
  });

  return (
    <form onSubmit={form.onSubmit(() => console.log(form.values))}>
      <Title
        order={2}
        size="h1"
        weight={900}
        align="center"
      >
        Exponha seu evento no ExpoMap
      </Title>
    
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Nome"
          placeholder="Seu nome"
          name="nameAdmin"
          variant="filled"
          {...form.getInputProps('nameAdmin')}
        />
        <TextInput
          label="Nome do Evento"
          placeholder="Seu do Evento"
          name="event.name"
          variant="filled"
          {...form.getInputProps('event.name')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Email"
          placeholder="Seu email"
          name="event.emailAdmin"
          variant="filled"
          {...form.getInputProps('event.emailAdmin')}
        />
        <TextInput
          label="Telefone"
          placeholder="Telefone"
          name="event.phoneAdmin"
          variant="filled"
          {...form.getInputProps('event.phoneAdmin')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Cidade"
          placeholder="Cidade do evento"
          name="event.address.city"
          variant="filled"
          {...form.getInputProps('event.address.city')}
        />
        <TextInput
          label="Estado"
          placeholder="Estado do evento"
          name="event.address.state"
          variant="filled"
          {...form.getInputProps('event.address.state')}
        />
      </SimpleGrid>

      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Bairro"
          placeholder="Bairro do evento"
          name="event.address.neighborhood"
          variant="filled"
          {...form.getInputProps('event.address.neighborhood')}
        />
        <TextInput
          label="Rua"
          placeholder="Rua do evento"
          name="event.address.street"
          variant="filled"
          {...form.getInputProps('event.address.street')}
        />
        <TextInput
          label="Número"
          placeholder="Digite o número ou S/N"
          name="event.address.number"
          variant="filled"
          {...form.getInputProps('event.address.number')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Latitude"
          placeholder="Latitude correta do evento"
          name="event.address.latitude"
          variant="filled"
          {...form.getInputProps('event.address.latitude')}
        />
        <TextInput
          label="Longitude"
          placeholder="Longitude correta do evento"
          name="event.address.longitude"
          variant="filled"
          {...form.getInputProps('event.address.longitude')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Data da abertura"
          placeholder="Date da abertura"
          name="event.startDate"
          variant="filled"
          {...form.getInputProps('event.startDate')}
        />

        <TextInput
          label="Data de encerramento"
          placeholder="Data de encerramento"
          name="event.endDate"
          variant="filled"
          {...form.getInputProps('event.endDate')}
        />
      </SimpleGrid>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Horário de abertura"
          placeholder="Horário de abertura"
          name="event.openningHour"
          variant="filled"
          {...form.getInputProps('event.openningHour')}
        />

        <TextInput
          label="Horário de fechamento"
          placeholder="Horário de fechamento"
          name="event.closeHour"
          variant="filled"
          {...form.getInputProps('event.closeHour')}
        />
      </SimpleGrid>

      
      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Select 
            label="Qual o tipo do evento?"
            data={[
                {value: 'free', label: 'Grátis'},
                {value: 'hybrid', label: 'Pago parcialmente'},
                {value: 'paid', label: 'Pago'},
            ]}
            mt="md"
            name="event.typeEntrance"
            variant="filled"
            {...form.getInputProps('event.typeEntrance')}
        />
        { form.values.event.typeEntrance !== "free" && (
          <>
          { form.values.event.typeEntrance !== "paid" && (
            <>
              <TextInput
                label="Horário de inicio da cobrança"
                placeholder="Horário inicio da cobrança"
                name="event.startPaymentEntranceHour"
                variant="filled"
                {...form.getInputProps('event.startPaymentEntranceHour')}
              />
            </>
          )}
          <TextInput
            label="Valor da entrada"
            placeholder="Valor da entrada (Apenas números)"
            name="event.valueEntrance"
            variant="filled"
            {...form.getInputProps('event.valueEntrance')}
          />
        </>
        )}
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Select 
            label="Possui camarote?"
            data={[
                {value: true, label: 'Sim'},
                {value: false, label: 'Não'},
            ]}
            mt="md"
            name="event.hasLounge"
            variant="filled"
            {...form.getInputProps('event.hasLounge')}
        />
          { form.values.event.typeEntrance !== "paid" && (<>
            <TextInput
              label="Link para compra do camarote"
              placeholder="Link para compra do camarote"
              name="event.loungeBuyLink"
              variant="filled"
              {...form.getInputProps('event.loungeBuyLink')}
            />
          </>)}
      </SimpleGrid>

      <Group position="center" mt="xl">
        <Button type="submit" size="md" color='green'>
          Solicitar
        </Button>
      </Group>
    </form>
  );
}