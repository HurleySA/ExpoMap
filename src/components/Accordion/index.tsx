import { Accordion as MantineAccordion } from '@mantine/core';
import { AccordionWrapper, Container } from './styles';
import { IAccordionProps } from '../../commons/dto';


export const Accordion: React.FC<IAccordionProps> = ({ listFAQ } ) => {
    return (
        <AccordionWrapper> 
            <Container className="container">
                <MantineAccordion styles={{
                   chevron: {
                    color: '#43A838',
                   },
                   label: {
                    color: '#43A838',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                   },
                   panel: {
                    fontWeight: 'bold',
                    fontSize: '1rem'
                   }
                }}  defaultValue={listFAQ[0].id}>
                    {listFAQ.map(faqItem => (
                        <MantineAccordion.Item value={faqItem.id}>
                           <MantineAccordion.Control>{faqItem.question}</MantineAccordion.Control>
                           <MantineAccordion.Panel>{faqItem.aswer}</MantineAccordion.Panel>
                       </MantineAccordion.Item>
                    ))
                    
                    }
                </MantineAccordion>
            </Container>
        </AccordionWrapper>
    );
};