import { IEvent, IFilterProps } from "../../commons/dto"
import { ActionContainer, Container, FilterContentContainer, FilterOptionsContainer, IconContainer, TitleSection } from "./styles.ts";
import { SiOpenstreetmap } from 'react-icons/si'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import { useState } from "react";
import { Checkbox, Loader } from "@mantine/core"
import { stateName } from "../../commons/utils.ts";

export const Filter: React.FC<IFilterProps> = ({mapView, setMapView, events, states, setStates }) => {
    const [showFilterOptions, setShowFilterOptions] = useState<boolean>(true);

    console.log(states);


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

    const handleChange = (value: string[]) => {
        if(value.length > states.length) {
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

    const toggleFilterOptions = () => {
        setShowFilterOptions(!showFilterOptions);
    };
    return (
        <Container className="container">
         
           
            <ActionContainer>
            {
                !mapView &&
                <IconContainer>
                    <FilterContentContainer  onClick={toggleFilterOptions}>
                        <FaFilter/>
                        <p>Filtrar por estado</p>
                        <FilterOptionsContainer className={showFilterOptions ? '' : 'disable'}>
                        <Checkbox.Group value={states} onChange={handleChange}>
                            <Checkbox value="ALL" label="Todos"/>
                            { listOfStates.map(state => <Checkbox key={state} className='checkbox' value={state} label={stateName[state]}/>)}
                        </Checkbox.Group>
                    </FilterOptionsContainer>
                    </FilterContentContainer>
                   
                </IconContainer>
             }
            </ActionContainer>
            <ActionContainer onClick={() => {setMapView(!mapView)}}>
                <IconContainer >{mapView ? <AiOutlineOrderedList/> : <SiOpenstreetmap/> }</IconContainer>
                <TitleSection>{mapView ? 'Veja em Lista' : 'Veja no Mapa' }</TitleSection>
            </ActionContainer>
        </Container>
    )

}