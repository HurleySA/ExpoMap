import { IEventSolicitation } from "../commons/dto";

const event1: IEventSolicitation = {
    id: "1",
    eventName: "Evento A",
    typeEntrance: "free",
    emailAdmin: "admin1@example.com",
    phoneAdmin: "123-456-7890",
    detailsEvent: "Detalhes do Evento A"
};

const event2: IEventSolicitation = {
    id: "2",
    eventName: "Evento B",
    typeEntrance: "paid",
    emailAdmin: "admin2@example.com",
    phoneAdmin: "987-654-3210",
    detailsEvent: "Detalhes do Evento B"
};

const event3: IEventSolicitation = {
    id: "3",
    eventName: "Evento C",
    typeEntrance: "hybrid",
    emailAdmin: "admin3@example.com",
    phoneAdmin: "555-555-5555",
    detailsEvent: "Detalhes do Evento C"
};

const event4: IEventSolicitation = {
    id: "4",
    eventName: "Evento D",
    typeEntrance: "free",
    emailAdmin: "admin4@example.com",
    phoneAdmin: "777-777-7777",
    detailsEvent: "Detalhes do Evento D"
};

const event5: IEventSolicitation = {
    id: "5",
    eventName: "Evento E",
    typeEntrance: "paid",
    emailAdmin: "admin5@example.com",
    phoneAdmin: "999-999-9999",
    detailsEvent: "Detalhes do Evento E"
};

export const listSolicitations = [event1, event2, event3, event4, event5];