import { useState } from 'react';
import { FilterContainer, FilterContentContainer, FilterItem, FilterMapContainer, FilterOptionsContainer, MapContainer, ModalMarker } from './styles';
import { Checkbox, Loader } from "@mantine/core"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { listEvents } from '../../mocks/event.ts'
import { IEvent } from '../../commons/dto.ts';
import { Button } from '../Button/index.tsx';
import {  useNavigate } from 'react-router-dom';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -8.03,
    lng: -40.77,
  };

interface IStateName {
    [key:string]: string
}

const stateName : IStateName = {
    "AL": 'Alagoas',
    "BA": 'Bahia',
    "PB": 'Paraiba',
    "RN": 'Rio Grande do Norte',
    "CE": 'Ceara',
    "MA": 'Maranhão',
    "PE": 'Pernambuco',
    "PI": 'Piaui',
    "SE": 'Sergipe',
}


const getListOfState = () => {
    const states: string[] = [];

    for (const event of listEvents) {
        if (event.address.state && !states.includes(event.address.state)) {
            states.push(event.address.state);
        }
    }
    return states;
}
const listOfStates = getListOfState()

export const Map = () => {
    const [state, setStates] = useState<string[]>([]);
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(true);
    const [modalOptionsEvent, setModalOptionsEvent] = useState<boolean>(false);
    const [eventToShow, setEventToShow] = useState<IEvent | null>(null);

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
    return (
        <>
         {isLoaded ? (
        <FilterMapContainer className='container'>
          <MapContainer>
            {
                (modalOptionsEvent && eventToShow) &&
                <ModalMarker>
                    <span onClick={() => setModalOptionsEvent(false)}>X</span>
                    <p>{eventToShow.name}</p>
                    <Button theme='white' hasBorder><div onClick={() => navigate(`/programacao/${eventToShow.id}`)}>Programação</div></Button>
                    <Button theme='white' hasBorder><div onClick={() => navigate(`/detalhes/${eventToShow.id}`)}>Detalhes</div></Button>
                    <Button theme='white' hasBorder>Participe</Button>
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
                   {listEvents.map(event => (state.includes('ALL') || state.includes(event.address.state)) && 
                    <Marker title='bom dia'  key={event.name} onClick={() => handleClickEvent(event)} 
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