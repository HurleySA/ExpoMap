import { TextInput, SimpleGrid, Group, Title, Button, Select, ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getInitialValueAdministrator } from './utils';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { IEventSolicitation, ISchedule, IShow } from '../../commons/dto';
import { toast } from 'react-toastify';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import React, { useRef, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { ContainerShow, ContainerShowList, ShowDetailsContainer, TitleShowDate } from './styles';
import locale from 'date-fns/locale/pt-BR'


interface IFormAdministratorProps {
  solicitation: IEventSolicitation | undefined
}

export const FormAdministrator: React.FC<IFormAdministratorProps> = ({solicitation} ) => {
  const { id }= useParams();
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [openFormSchedule, setOpenFormSchedule] = useState<boolean>(false);
  const [showNumber, setShowNumber] = useState<IShow[]>([{band: '', hour: ''}]);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>();
  const refClose = useRef<HTMLInputElement>();
  const refPayment = useRef<HTMLInputElement>();
  const initialValues = getInitialValueAdministrator(solicitation);
  const form = useForm({
    initialValues
  });

  const addSchedule = (newSchedule) => {
    const updatedSchedules = [...schedules];
    updatedSchedules.push(newSchedule);
    setSchedules(updatedSchedules);
  };

  const resetNewScheduleForm = () => {
    setValue(null);
    setShowNumber([{band: '', hour: ''}])
  }

  const getDateString = (dateString: string) => {
    const date = parseISO(dateString);
    const formattedDate = format(date, "'Dia' do MMMM 'de' yyyy (EEEE)", { locale})
    return formattedDate;
}

const handleHourChange = (value: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const updatedShowNumber = [...showNumber];
  updatedShowNumber[index].hour = value.target.value;
  setShowNumber(updatedShowNumber);
};
const handleBandChange = (event: any, index: number) => {
  const updatedShowNumber = [...showNumber];
  updatedShowNumber[index].band = event.target.value;
  setShowNumber(updatedShowNumber);
};

const validateShows = (shows: IShow[]) =>  shows.every(item => item.band !== '');



  const handleSubmit = async (values, solicitationId, schedules) => {
    try {
      const submitObject = {
        name: values.event.name,
        city: values.event.address.city,
        state: values.event.address.state,
        street: values.event.address.street,
        neighborhood: values.event.address.neighborhood,
        number: values.event.address.number === 'S/N' ? 'S/N' : parseInt(values.event.address.number),
        latitude: parseFloat(values.event.address.latitude),
        longitude: parseFloat(values.event.address.longitude),
        startDate: format(values.event.startDate, 'yyyy-MM-dd'),
        endDate: format(values.event.endDate, 'yyyy-MM-dd'),
        openningHour: values.event.openningHour,
        closeHour: values.event.closeHour,
        solicitationId,
        typeEntrance: values.event.typeEntrance,
        valueEntrance: parseInt(values.event.valueEntrance),
        startPaymentEntranceHour: values.event.startPaymentEntranceHour || values.event.openningHour,  //PERMITIR SER EMPTY
        emailAdmin: values.event.emailAdmin,
        phoneAdmin: values.event.phoneAdmin,
        sponsors: [], //RESOLVER
        hasLounge: values.event.hasLounge,
        loungeBuyLink: values.event.loungeBuyLink,
        schedules
      }
      console.log(submitObject)
      await api.post('/event', submitObject);
      toast.success("Evento registrado enviada com sucesso!");
      navigate('/')
      form.reset();
    } catch (err) {
      toast.error("Erro ao registrar evento!")
      console.log(err)
    }
  } 

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit(form.values, id, schedules))}>
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
      <DatePickerInput
        label="Data da abertura"
        placeholder="Data da abertura"
        minDate={new Date()}
        defaultDate={new Date()}
        name="event.startDate"
        {...form.getInputProps('event.startDate')}
      />
      <DatePickerInput
        label="Data de encerramento"
        placeholder="Data de encerramento"
        minDate={new Date()}
        defaultDate={new Date()}
        name="event.endDate"
        {...form.getInputProps('event.endDate')}
      />
      </SimpleGrid>
      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TimeInput
            label="Horário de abertura"
            ref={ref}
            rightSection={
              <ActionIcon onClick={() => ref.current.showPicker()}>
                <IconClock size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            name="event.openningHour"
            {...form.getInputProps('event.openningHour')}
          />
        <TimeInput
            label="Horário de fechamento"
            ref={refClose}
            rightSection={
              <ActionIcon onClick={() => refClose.current.showPicker()}>
                <IconClock size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            name="event.closeHour"
            {...form.getInputProps('event.closeHour')}
          />
      </SimpleGrid>

      
      <SimpleGrid cols={3} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Select 
            label="Qual o tipo do evento?"
            data={[
                {value: 'FREE', label: 'Grátis'},
                {value: 'HYBRID', label: 'Pago parcialmente'},
                {value: 'PAID', label: 'Pago'},
            ]}
            name="event.typeEntrance"
            variant="filled"
            {...form.getInputProps('event.typeEntrance')}
        />
        { form.values.event.typeEntrance !== "FREE" && (
          <>
          { form.values.event.typeEntrance !== "PAID" && (
            <>
                <TimeInput
                  label="Horário de inicio da cobrança"
                  ref={refPayment}
                  rightSection={
                    <ActionIcon onClick={() => refPayment.current.showPicker()}>
                      <IconClock size="1rem" stroke={1.5} />
                    </ActionIcon>
                  }
                  name="event.startPaymentEntranceHour"
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
          { form.values.event.hasLounge && (<>
            <TextInput
              label="Link para compra do camarote"
              placeholder="Link para compra do camarote"
              name="event.loungeBuyLink"
              variant="filled"
              {...form.getInputProps('event.loungeBuyLink')}
            />
          </>)}
      </SimpleGrid>
      <Group position="left" mt="xl">
        <Title order={3}>Programação:</Title>
        <ContainerShowList>
            {schedules.length > 0 ? 
            <>
                {schedules.map(schedule => (
                    <ContainerShow key={schedule.date}>
                        <TitleShowDate>{getDateString(schedule.date)}</TitleShowDate>
                        {schedule.shows.map(show => (
                            <ShowDetailsContainer key={show.band}>
                                <p>{show.band}</p>
                                {show.hour ? <p>{show.hour} horas.</p> : <p>-</p>}
                            </ShowDetailsContainer>
                        ))
                        }
                    </ContainerShow>
                )
                        
                )}
            </>
            : <p>Não há shows cadastrados</p>
        }

        </ContainerShowList>
      </Group>

          <Group position="left" mt="xl">
            <Button  size="md" color='gray' onClick={() => setOpenFormSchedule(true)}>
              Editar programação
            </Button>
          </Group>


          {
            openFormSchedule && (
              <>
                <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                  <DatePickerInput
                    label="Data das apresentações"
                    placeholder="Data das apresentações"
                    minDate={new Date(form.values.event.startDate)}
                    maxDate={new Date(form.values.event.endDate)}
                    defaultDate={new Date(form.values.event.startDate)}
                    value={value}
                    onChange={setValue}
                  />
            
                </SimpleGrid>
                {
                  showNumber.map((show, index) => {
                    return (
                      <SimpleGrid key={index} cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                        <TextInput
                          label="Nome da atração"
                          placeholder="Nome da atração"
                          value={showNumber[index].band}
                          onChange={(event) => handleBandChange(event, index)}
                        />
                        <TimeInput
                            label="Horário da atração"
                            placeholder="Horário da atração"
                            value={showNumber[index].hour}
                            onChange={(value) => handleHourChange(value, index)}
                          />
                      </SimpleGrid>
                    )
                  })
                }
    
          
                <Group position="left" mt="xl">
                  <Button size="md" color='green' onClick={() => {  
                    setShowNumber([...showNumber, {band: '', hour: ''}])
                  }}>
                    Adicionar novo show
                  </Button>
                { (value && validateShows(showNumber)) &&
                  <Button size="md" color='green' onClick={() => {
                    addSchedule({date: format(value, 'yyyy-MM-dd'), shows:showNumber});
                    resetNewScheduleForm()
                    setOpenFormSchedule(false)
                  }}>
                    Editar programação
                </Button>
                }
                </Group>
              </>
            ) 
          }
   
    

     

      <Group position="center" mt="xl">
        <Button type="submit" size="md" color='green'>
          Solicitar
        </Button>
      </Group>
    </form>
  );
}