import { ReactNode } from "react";
export interface IEventDetailsCompleteProps {
    event: IEvent
}
export interface IAccordionProps {
    listFAQ: IFrequencyQuestion[]
}

export interface IMapProps {
    events: IEvent[]
}

export interface IButtonProps {
    children: ReactNode;
    theme: "green" | "white";
    [x:string]: any;
    hasBorder?: boolean,
    hasBorderBotton?: boolean,
}
export interface IFilterProps {
    mapView: boolean,
    setMapView: React.Dispatch<React.SetStateAction<boolean>>,
    events: IEvent[],
    states: string[],
    setStates: React.Dispatch<React.SetStateAction<string[]>>,
}

export interface ButtonThemeProps {
    theme: "green" | "white";
    hasBorder?: boolean,
    hasBorderBotton?: boolean,
}

export interface ParticipateOptionProps {
    isActive: boolean;
}

export interface IEventSolicitation {
    id: string
    eventName: string,
    typeEntrance: 'FREE' | 'PAID' | 'HYBRID',
    emailAdmin: string,
    phoneAdmin: string,
    detailsEvent: string,
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
}
export interface IEvent {
    id: string
    name: string,
    address: IAddress,
    startDate: string,
    endDate: string,
    openningHour: string,
    closeHour: string,
    typeEntrance: 'FREE' | 'PAID' | 'HYBRID'
    valueEntrance?: number,
    startPaymentEntranceHour?: string,
    emailAdmin: string,
    phoneAdmin: string,
    sponsors: string[],
    hasLounge: boolean,
    loungeBuyLink?: string,
    schedules: ISchedule[]
}

export interface IAddress {
    city: string,
    state: 'AL' | 'BA' | 'PB' | 'RN' | 'CE' | 'MA' | 'PE' | 'PI' | 'SE' | '',
    street: string,
    neighborhood: string,
    number: number | 'S/N',
    latitude: number,
    longitude: number
}

export interface ISchedule {
    date: string,
    shows: IShow[]
}

export interface IShow {
    band: string,
    hour?: string 
}
export interface IFrequencyQuestion { 
    id: string,
    question: string,
    aswer: string
}

export interface IStateName {
    [key:string]: string
}
