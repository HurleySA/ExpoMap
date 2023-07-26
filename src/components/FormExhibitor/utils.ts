interface IObjectInitialExhibitor {
    eventId: string
    name: string,
    email: string,
    phone: string,
    workedInThePast: boolean,
    detail: string,
}

export const getInitialValueExhibitor = (eventId?: string) => {
    const objectInitialExhibitor: IObjectInitialExhibitor = {
        eventId: eventId ? eventId : '',
        name: '',
        email: '',
        phone: '',
        workedInThePast: false,
        detail: ''
    }
    return objectInitialExhibitor
}