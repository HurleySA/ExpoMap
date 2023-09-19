import { IEvent } from "../../commons/dto"
type IEventDescription = Omit<IEvent, 'id' | 'sponsors' | 'schedules'> & { sponsors: string, schedules: string }

interface IObjectInitialAdministrator {
    nameAdmin: string,
    event: IEventDescription
}

export const getInitialValueAdministrator = () => {
    const objectInitialAdministrator: IObjectInitialAdministrator = {
        nameAdmin: '',
        event: {
            name: '',
            address: {
                city: '',
                state: '',
                street: '',
                neighborhood: '',
                number: 'S/N',
                latitude: -5.18804,
                longitude: -37.3441
            },
            startDate: '',
            endDate: '',
            openningHour: '',
            closeHour: '',
            typeEntrance: 'FREE',
            startPaymentEntranceHour: '',
            valueEntrance: 0,
            emailAdmin: '',
            phoneAdmin: '',
            sponsors: '',
            hasLounge: false,
            loungeBuyLink: '',
            schedules: ''
        }
    }
    return objectInitialAdministrator
}
