import { useState } from 'react';
import { FilterContainer, FilterContentContainer,  FilterMapContainer, FilterOptionsContainer, MapContainer, ModalMarker } from './styles';
import { Checkbox, Loader } from "@mantine/core"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { IEvent, IMapProps } from '../../commons/dto.ts';
import { Button } from '../Button/index.tsx';
import {  useNavigate } from 'react-router-dom';
import { isBefore, parseISO } from 'date-fns';
import { stateName } from '../../commons/utils.ts';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -8.03,
    lng: -40.77,
  };



export const Map = ({ events }: IMapProps) => {
    const [state, setStates] = useState<string[]>([]);
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(true);
    const [modalOptionsEvent, setModalOptionsEvent] = useState<boolean>(false);
    const [eventToShow, setEventToShow] = useState<IEvent | null>(null);

    const getListOfState = (events: IEvent[]) => {
        const states: string[] = [];
    
        for (const event of events) {
            if (event.address.state && !states.includes(event.address.state)) {
                states.push(event.address.state);
            }
        }
        return states;
    }
    const listOfStates = getListOfState(events);

    const navigate = useNavigate()
    const toggleFilterOptions = () => {
        setShowFilterOptions(!showFilterOptions);
    };
    
    const handleChange = (value: string[]) => {
        if(value.length > state.length) {
            value.includes('ALL') ? setStates(['ALL', ...listOfStates]) : value.length === listOfStates.length ? setStates(['ALL', ...value]) :  setStates(value)
           
        } else {
            if(value.includes('ALL')) {
                const newValueWithoutAll = value.filter(item => item !== 'ALL');
                setStates(newValueWithoutAll)
            } else {
                setStates(value)
            }
        }
    };

    const handleClickEvent = (event: IEvent) => {
        setEventToShow(event);
        setModalOptionsEvent(true)
    }

    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBjuKYUqPX-qUHkXeLVxQ5MMacCEAIl2QI"
      })
    const verifyEventAlreadyFinish = (date: string) => {
        const actualDate = new Date();
        const eventDate = parseISO(date);
        if (isBefore(eventDate, actualDate)) {
            return true;
          } else {
            return false;
          }
    }
    return (
        <>
         {isLoaded ? (
        <FilterMapContainer className='container'>
          <MapContainer>
            {
                (modalOptionsEvent && eventToShow) &&
                <ModalMarker>
                    <span onClick={() => setModalOptionsEvent(false)}>X</span>
                    {verifyEventAlreadyFinish(eventToShow.endDate) && <p>EVENTO FINALIZADO</p> }
                    <p>{eventToShow.name}</p>
                    <Button theme='white' hasBorder><div onClick={() => navigate(`/programacao/${eventToShow.id}`)}>Programação</div></Button>
                    <Button theme='white' hasBorder><div onClick={() => navigate(`/detalhes/${eventToShow.id}`)}>Detalhes</div></Button>
                    <Button theme='white' hasBorder onClick={() => navigate(`/participate`, {
                        state: {
                            eventId: eventToShow.id
                        }
                    })}>Participe</Button>
                </ModalMarker>
            }
            <FilterContainer>
                <FilterContentContainer  onClick={toggleFilterOptions}>
                    <img src="/filtro.png" alt="Icone de filtro" />
                    <p>Filtrar por estado</p>
                </FilterContentContainer>
                <FilterOptionsContainer className={showFilterOptions ? '' : 'disable'}>
                    <Checkbox.Group value={state} onChange={handleChange}>
                        <Checkbox value="ALL" label="Todos"/>
                        { listOfStates.map(state => <Checkbox key={state} className='checkbox' value={state} label={stateName[state]}/>)}
                    </Checkbox.Group>
                </FilterOptionsContainer>
            </FilterContainer>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center} 
              zoom={5}
              >
                   {events.map(event => (state.includes('ALL') || state.includes(event.address.state)) && 
                    <Marker  key={event.name} onClick={() => handleClickEvent(event)} opacity={verifyEventAlreadyFinish(event.endDate) ? 0.6: 1}
                    position={{ lat: event.address.latitude , lng: event.address.longitude }}> 
                    </Marker>
                   )}
            </GoogleMap>
          
          </MapContainer>
        </FilterMapContainer>
    ) : <Loader   />}
        </>
    )
}