 import { IFrequencyQuestion } from '../../commons/dto';
import { Accordion } from '../Accordion';
import { AccordionWrapper, Title } from './styles';

export const FAQ: React.FC = () => {
    const listFAQ: IFrequencyQuestion[]  = [
        { 
            id: 'participateEvent',
            question: 'Como solicitar participação do evento?',
            aswer: 'Para participar do evento basta enviar um e-mail para administração na página de Participe do evento.'
        },
        { 
            id: 'newEvent',
            question: 'Como solicitar um novo evento',
            aswer: 'Basta fazer solicitação por e-mail com mais detalhes sobre seu evento.'
        },
        { 
            id: 'touristParticipation',
            question: 'Sou turista, como posso conhecer os eventos?',
            aswer: 'Ao clicar no evento que deseja conhecer você terá acesso a informações mais detalhadas. Dentre elas está a data, horário e localização.'
        },
        { 
            id: 'isPaidEvent',
            question: 'Os eventos são pagos?',
            aswer: 'O eventos podem ser em 3 formatos. Grátis, Pago em todo momento ou Pago a partir de um certo horário. No detalhamento do evento será informado se é pago, e caso seja o horário que a cobrança é inciada.'
        },
        { 
            id: 'billSupportExpoMap',
            question: 'Como posso patrocinar o ExpoMap',
            aswer: 'Faz o pix ae!'
        },
        { 
            id: 'sponsorEvent',
            question: 'Como faço para patrocinar um evento?',
            aswer: 'Para patrocinar algum evento basta enviar um e-mail para administração na página de Participe do evento.'
        },
    
    ]
    return (
        <AccordionWrapper> 
            <Title>Perguntas Frequentes</Title >
            <Accordion listFAQ={listFAQ} />
    
        </AccordionWrapper>
    );
};