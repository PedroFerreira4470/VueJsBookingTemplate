module.exports = function() {
  let data = {
    bookings: [
      {
        id: 1,
        bookingNumber: "20013555426",
        client: "Garland",
        origin: "Porto",
        destination: "Madrid",
        createdBy: { firstName: "Pedro", lastName: "Ferreira" }
      },
      {
        id: 2,
        bookingNumber: "11938685432",
        client: "Client2",
        origin: "Lisboa",
        destination: "Porto",
        createdBy: { firstName: "Joao", lastName: "Silva" }
      },
      {
        id: 3,
        bookingNumber: "11934554436",
        client: "Client Teste 1",
        origin: "Algarve",
        destination: "Lisboa",
        createdBy: { firstName: "Bruno", lastName: "Silveira" }
      },
      {
        id: 4,
        bookingNumber: "11923444095",
        client: "Trin",
        origin: "Madrid",
        destination: "Algarve",
        createdBy: { firstName: "Fabio", lastName: "Pacheco" }
      }
    ],
    bookingsDetail: [
      {
        id: 1,
        bookingNumber: "20013555426",
        client: "Garland",
        locations: {
          origin: "Porto",
          destination: "Madrid"
        },
        airports:{
          origin:"Porto Sá Carneiro",
          destination:"Aeroporto de Madrid",
        },
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
        airports:{
          origin:"Porto Sá Carneiro",
          destination:"Aeroporto de Madrid",
        },
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
        airports:{
          origin:"Porto Sá Carneiro",
          destination:"Aeroporto de Madrid",
        },
        createdBy: { firstName: "Bruno", lastName: "Silveira" }
      },
      {
        id: 4,
        bookingNumber: "11923444095",
        client: "Trin",
        locations: {
          origin: "Madrid",
          destination: "Algarve",
        },
        airports:{
          origin:"Porto Sá Carneiro",
          destination:"Aeroporto de Madrid",
        },
        createdBy: { firstName: "Fabio", lastName: "Pacheco" }
      }
    ]
  };
  return data;
};
