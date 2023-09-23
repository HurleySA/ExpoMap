import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getInitialValueExhibitor } from './utils';
import { toast } from 'react-toastify';
import { IEvent } from '../../commons/dto';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface IParticipateEventProps {
  eventId?: string,
}

export const FormExhibitor: React.FC<IParticipateEventProps> = ({eventId}) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const getEvents = async (): Promise<IEvent[]> => {
      try {
          const data = await api.get(`/event`);
          const json = data.data;
          return json;
      } catch (err) {
          return [];
      }
  } 

  useEffect(() => {
      const loadEvents = async () => {
          setLoading(true);
          const events = await getEvents();
          setEvents(events);
          setLoading(false);
      }

      loadEvents();
      
  }, [])
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

  const handleSubmit = async (values: any) => {
    try {
      await api.post('/solicitation/exhibitor', values);
      toast.success("Solicitação enviada com sucesso!")
      form.reset();
    } catch (err){
      toast.error("Erro ao enviar solicitação!")
    }
  }

  const eventsListToSelect = events.map((event) => ({value: event.id, label: event.name}))
  return (
    <form onSubmit={form.onSubmit(() => handleSubmit(form.values))}>
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