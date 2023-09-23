import { format, parseISO } from 'date-fns';
import { IEventDetailsCompleteProps } from '../../commons/dto.ts';
import { ContainerShow, ContainerShowList, ShowDetailsContainer, TitleShowDate } from './styles.ts';
import locale from 'date-fns/locale/pt-BR'


export const ShowList: React.FC<IEventDetailsCompleteProps>  = ({event}) =>  {

    const getDateString = (dateString: string) => {
        const date = parseISO(dateString);
        const formattedDate = format(date, "'Dia' do MMMM (EEEE)", { locale})
        return formattedDate;
    }

    getDateString('2023-07-01')

    console.log(event.schedules)

    return (
        <ContainerShowList>
            {event.schedules.length > 0 ? 
            <>
                {event.schedules.map(schedule => (
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
            : <p>Não há shows</p>
        }

        </ContainerShowList>
    )
}