module.exports = function() {
  let data = {
    bookings: [
      {
        id: 1,
        bookingNumber: "20013555426",
        client: "Garland",
        locations: {
          origin: "Porto",
          destination: "Madrid"
        },
        airports: {
          origin: "Porto Sá Carneiro",
          destination: "Aeroporto de Madrid"
        },
        shipments: null,
        cargo: null,
        createdBy: { firstName: "Pedro", lastName: "Ferreira" }
      },
      {
        id: 2,
        bookingNumber: "11938685432",
        client: "Client2",
        locations: {
          origin: "Lisboa",
          destination: "Porto"
        },
        airports: {
          origin: "Porto Sá Carneiro",
          destination: "Aeroporto de Madrid"
        },
        shipments: null,
        cargo: null,
        createdBy: { firstName: "Joao", lastName: "Silva" }
      },
      {
        id: 3,
        bookingNumber: "11934554436",
        client: "Client Teste 1",
        locations: {
          origin: "Algarve",
          destination: "Lisboa"
        },
        airports: {
          origin: "Porto Sá Carneiro",
          destination: "Aeroporto de Madrid"
        },
        shipments: null,
        cargo: null,
        createdBy: { firstName: "Bruno", lastName: "Silveira" }
      },
      {
        id: 4,
        bookingNumber: "11923444095",
        client: "Trimasd",
        locations: {
          origin: "Madrid",
          destination: "Algarve"
        },
        airports: {
          origin: "Porto Sá Carneiro",
          destination: "Aeroporto de Madrid"
        },
        shipments: null,
        cargo: null,
        createdBy: { firstName: "Fabio", lastName: "Pacheco" }
      }
    ],
    clientsLookup: [
      { id: 1, name: "Garland" },
      { id: 2, name: "Client2" },
      { id: 3, name: "Client Teste 1" },
      { id: 4, name: "Trimasd" }
    ],
    airportsLookup: [
      { id: 1, name: "Porto Sá Carneiro" },
      { id: 2, name: "Aeroporto de Madrid" }
    ],
    locationsLookup: [
      { id: 1, name: "Madrid" },
      { id: 2, name: "Algarve" },
      { id: 3, name: "Lisboa" },
      { id: 4, name: "Porto" }
    ]
  };
  return data;
};
