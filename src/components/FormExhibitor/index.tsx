import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getInitialValueExhibitor } from './utils';
import { listEvents } from '../../mocks/event';
import { useCallback } from 'react';

interface IParticipateEventProps {
  eventId?: string,
}

export const FormExhibitor: React.FC<IParticipateEventProps> = ({eventId}) => {
  const initialValues = getInitialValueExhibitor(eventId);
  const form = useForm({
    initialValues,
    validate: {
      eventId: (value) => value.trim().length === 0,
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      phone: (value) => value.trim().length === 0,
      detail: (value) => value.trim().length === 0,
    },
  });

  const eventsListToSelect = listEvents.map((event) => ({value: event.id, label: event.name}))
  return (
    <form onSubmit={form.onSubmit(() => console.log(form.values))}>
      <Title
        order={2}
        size="h1"
        weight={900}
        align="center"
      >
        Solicite sua participação
      </Title>

      <Select 
        label="Qual evento deseja participar?"
        placeholder="Escolha um evento"
        data={eventsListToSelect}
        mt="md"
        name="eventId"
        variant="filled"
        {...form.getInputProps('eventId')}
      />

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Nome"
          placeholder="Seu nome"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Seu email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Telefone"
          placeholder="Seu telefone"
          name="phone"
          variant="filled"
          {...form.getInputProps('phone')}
        />

        <Select 
            label="Trabalhou na edição anterior?"
            data={[
                {value: true, label: 'Sim'},
                {value: false, label: 'Não'},
            ]}
            mt="md"
            name="workedInThePast"
            variant="filled"
            {...form.getInputProps('workedInThePast')}
        />
      </SimpleGrid>

      <Textarea
        mt="md"
        label="Explique como deseja participar do evento"
        placeholder="Detalhes do seu seu estande"
        maxRows={10}
        minRows={5}
        autosize
        name="detail"
        variant="filled"
        {...form.getInputProps('detail')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md" color='green'>
          Solicitar
        </Button>
      </Group>
    </form>
  );
}