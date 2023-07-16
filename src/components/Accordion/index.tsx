import { Accordion as MantineAccordion } from '@mantine/core';
import { AccordionWrapper, Container } from './styles';

export const Accordion: React.FC = () => {
    return (
        <AccordionWrapper> 
            <h2>Perguntas Frequentes</h2>
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
                }}  defaultValue='testing'>
                    <MantineAccordion.Item value='testing'>
                        <MantineAccordion.Control>Como posso agendar?</MantineAccordion.Control>
                        <MantineAccordion.Panel>Basta clicar no botão "agendar vacina" e informar seu nome, data de nascimento e data para vacinação. Se houver oferta no momento, basta se dirigir ao ponto de vacinação na data e horário solicitada.</MantineAccordion.Panel>
                    </MantineAccordion.Item>
                    <MantineAccordion.Item value='regras'>
                        <MantineAccordion.Control>Quais as regras de agendamento?</MantineAccordion.Control>
                        <MantineAccordion.Panel>Sim. Atualmente estamos fazendo agendamento com limite máximo por dia e também por hora.</MantineAccordion.Panel>
                    </MantineAccordion.Item>
                    <MantineAccordion.Item value='dia'>
                        <MantineAccordion.Control>Qual o limite máximo por dia?</MantineAccordion.Control>
                        <MantineAccordion.Panel>Limite por dia de até 20 pessoas.</MantineAccordion.Panel>
                    </MantineAccordion.Item>
                    <MantineAccordion.Item value='limite'>
                        <MantineAccordion.Control>Qual o limite máximo por hora?</MantineAccordion.Control>
                        <MantineAccordion.Panel>Assumindo que não há ainda 20 agendamentos no dia, há um limite de 2 agendamentos por hora.</MantineAccordion.Panel>
                    </MantineAccordion.Item>
                </MantineAccordion>
            </Container>
        </AccordionWrapper>
    );
};