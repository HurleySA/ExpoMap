import { useState } from 'react';
import { FilterContainer, FilterContentContainer, FilterItem, FilterMapContainer, FilterOptionsContainer, MapContainer } from './styles';
import { Checkbox, Loader } from "@mantine/core"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { listEvents } from '../../mocks/event.ts'

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -8.03,
    lng: -40.77,
  };

export const Map = () => {
    const [state, setStates] = useState<string[]>([]);

    const handleChange = (value: string[]) => {
        if(value.length > state.length) {
            value.includes('ALL') ? setStates(['ALL', 'PB', 'CE', 'PE']) : setStates(value)
           
        } else {
            if(value.includes('ALL')) {
                const newValueWithoutAll = value.filter(item => item !== 'ALL');
                setStates(newValueWithoutAll)
            } else {
                setStates(value)
            }
        }
        console.log(value, state)
    };
    
    const { isLoaded } = useJsApiLoader({

        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBjuKYUqPX-qUHkXeLVxQ5MMacCEAIl2QI"
      })

    return (
        <>
         {isLoaded ? (
        <FilterMapContainer className='container'>
          <MapContainer>
            <FilterContainer>
                <FilterContentContainer>
                    <img src="/filtro.png" alt="Icone de filtro" />
                    <p>Filtrar por estado</p>
                </FilterContentContainer>
                <FilterOptionsContainer>
                    <Checkbox.Group value={state} onChange={handleChange}>
                        <Checkbox value="ALL" label="Todos"/>
                        <Checkbox value='PB' label="Paraiba"/>
                        <Checkbox value='PE' label="Pernambuco"/>
                        <Checkbox value='CE'  label="Ceara"/>
                    </Checkbox.Group>
                </FilterOptionsContainer>
            </FilterContainer>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center} 
              zoom={5}
              >
                   {listEvents.map(event => (state.includes('ALL') || state.includes(event.address.state)) && <Marker onClick={() => console.log(event)} position={{ lat: event.address.latitude , lng: event.address.longitude }}> </Marker>)}
            </GoogleMap>
          
          </MapContainer>
        </FilterMapContainer>
    ) : <Loader   />}
        </>
    )
}