 import { IFrequencyQuestion } from '../../commons/dto';
import { Accordion } from '../Accordion';
import { AccordionWrapper, Title } from './styles';

export const FAQ: React.FC = () => {
    const listFAQ: IFrequencyQuestion[]  = [
        { 
            id: 'participateEvent',
            question: 'Como solicitar participação de um evento?',
            aswer: `Para solicitar participação basta acessar página de Participe, preencher os dados exigidos e confirmar, assim será enviado um e-mail para administração de evento.`
        },
        { 
            id: 'newEvent',
            question: 'Como posso divulgar um evento no ExpoMap?',
            aswer: `Para solicitar participação basta acessar página de Participe, selecionar a opção "Administrador", preencher os dados exigidos e confirmar, assim sua solicitação será cadastrada no sistema para que um dos Administradores do ExpoMap analise.`
        },
        { 
            id: 'touristParticipation',
            question: 'Sou turista, como posso conhecer os eventos?',
            aswer: 'Na página de eventos você terá acesso a informações detalhadas de todos eventos e possibilidade de ver no Mapa.'
        },
        { 
            id: 'isPaidEvent',
            question: 'Os eventos são pagos?',
            aswer: 'O eventos podem ser em 3 formatos. Grátis, Pago em todo momento ou Pago a partir de um certo horário. No detalhamento do evento será informado se é pago, e caso seja o horário que a cobrança é inciada.'
        },
        { 
            id: 'sponsorEvent',
            question: 'Como faço para patrocinar um evento?',
            aswer: 'Para patrocinar algum evento basta enviar um e-mail para administração na página de Participe do evento.'
        },
    
    ]
    return (
        <AccordionWrapper id='faq'> 
            <Title>Perguntas Frequentes</Title >
            <Accordion listFAQ={listFAQ} />
    
        </AccordionWrapper>
    );
};