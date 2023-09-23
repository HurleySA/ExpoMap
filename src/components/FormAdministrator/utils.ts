import { IEvent, IEventSolicitation } from "../../commons/dto"
type IEventDescription = Omit<IEvent, 'id' | 'sponsors' | 'schedules' |'startDate' | 'endDate'> & { sponsors: string, schedules: string, startDate: Date, endDate: Date }

interface IObjectInitialAdministrator {
    nameAdmin: string,
    event: IEventDescription
}

export const getInitialValueAdministrator = (solicitation: IEventSolicitation) => {
    const objectInitialAdministrator: IObjectInitialAdministrator = {
        nameAdmin: '',
        event: {
            name: solicitation.eventName || '',
            address: {
                city: '',
                state: '',
                street: '',
                neighborhood: '',
                number: 'S/N',
                latitude: 0,
                longitude: 0
            },
            startDate: new Date(),
            endDate: new Date(),
            openningHour: '',
            closeHour: '',
            typeEntrance: solicitation.typeEntrance || 'FREE',
            startPaymentEntranceHour: '',
            valueEntrance: 0,
            emailAdmin: solicitation.emailAdmin || '',
            phoneAdmin: solicitation.phoneAdmin || '',
            sponsors: '',
            hasLounge: false,
            loungeBuyLink: '',
            schedules: ''
        }
    }
    return objectInitialAdministrator
}
