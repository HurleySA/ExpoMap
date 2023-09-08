import { IEvent } from "../commons/dto";

const event1: IEvent = {
    id: '1',
    name: "Evento 1",
    address: {
      city: "Recife",
      state: "PE",
      street: "Rua A",
      neighborhood: "Bairro X",
      number: 123,
      latitude: -8.123456,
      longitude: -34.567890,
    },
    startDate: "2023-07-01",
    endDate: "2024-07-05",
    openningHour: "09:00",
    closeHour: "18:00",
    typeEntrance: "paid",
    valueEntrance: 10,
    startPaymentEntranceHour: "08:00",
    emailAdmin: "admin1@example.com",
    phoneAdmin: "1234567890",
    sponsors: ["Sponsor 1", "Sponsor 2"],
    hasLounge: true,
    loungeBuyLink: "https://example.com/lounge",
    schedules: [
      {
        date: "2023-07-01",
        shows: [
          {
            band: "Band 1",
            hour: "20:00",
          },
          {
            band: "Band 2",
            hour: "22:00",
          },
        ],
      },
      {
        date: "2023-07-02",
        shows: [
          {
            band: "Band 3",
          },
        ],
      },
    ],
  };
  
  const event2: IEvent = {
    id: '2',
    name: "Evento 2",
    address: {
      city: "Fortaleza",
      state: "CE",
      street: "Rua B",
      neighborhood: "Bairro Y",
      number: 456,
      latitude: -3.987654,
      longitude: -38.765432,
    },
    startDate: "2023-08-01",
    endDate: "2023-08-03",
    openningHour: "10:00",
    closeHour: "20:00",
    typeEntrance: "free",
    emailAdmin: "admin2@example.com",
    phoneAdmin: "9876543210",
    sponsors: ["Sponsor 3"],
    hasLounge: false,
    schedules: [
      {
        date: "2023-08-01",
        shows: [
          {
            band: "Band 4",
            hour: "19:00",
          },
        ],
      },
      {
        date: "2023-08-02",
        shows: [
          {
            band: "Band 5",
          },
          {
            band: "Band 6",
          },
        ],
      },
      {
        date: "2023-08-03",
        shows: [
          {
            band: "Band 7",
            hour: "21:00",
          },
        ],
      },
    ],
  };

  export const listEvents = [ event1, event2] 