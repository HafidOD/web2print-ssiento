const enterpises = [
  {
    enterpriseName: "Marriot",
    logo: "/images/enterprises/logos/marriott.jpg",
  },
  {
    enterpriseName: "City Express",
    logo: "/images/enterprises/logos/city-express.jpg",
  },
  {
    enterpriseName: "Bonvoy",
    logo: "/images/enterprises/logos/bonvoy.jpg",
  },
];

const addresses = [
  {
    officeName: "City Express Junior Aguascalientes Centro",
    address: "Blvd. José María Chávez No. 1919, Col. San Pedro",
    city: "Aguascalientes",
    country: "México",
    state: "Aguascalientes",
    postalCode: 20230,
    enterpriseId: 2,
  },
  {
    officeName: "City Express Aguascalientes Sur",
    address: "Av. Ayuntamiento 102, Obraje.",
    city: "Aguascalientes",
    country: "México",
    state: "Aguascalientes",
    postalCode: 20280,
    enterpriseId: 2,
  },
  {
    officeName: "Marriott Cancún",
    address: "Blvd. Colosio",
    city: "Cancún",
    country: "México",
    state: "Quintana Roo",
    postalCode: 77500,
    enterpriseId: 1,
  },
  {
    officeName: "Bonvoy Cancún",
    address: "Blvd. Kukulcan.",
    city: "Cancún",
    country: "México",
    state: "Quintana Roo",
    postalCode: 77500,
    enterpriseId: 3,
  },
];

const users = [
  {
    email: "hola@mundo.com",
    password: "$2a$12$mm75a9HEcagLhHJwDcRrBeEIaFhWMkZa1b8CXczhpvTfdLVZNzT4W",
    userName: "Hafid",
    enterprises: [1, 2, 3],
    role: 3,
    typePrice: 1,
    currency: "MXN",
    addresses: [1, 2, 3, 4],
  },
  {
    email: "marriott@marriott.com",
    password: "$2a$12$mm75a9HEcagLhHJwDcRrBeEIaFhWMkZa1b8CXczhpvTfdLVZNzT4W",
    userName: "Marriott",
    role: 1,
    typePrice: 1,
    currency: "MXN",
    enterprises: [1, 3],
    addresses: [3],
  },
  {
    email: "city@express.com",
    password: "$2a$12$mm75a9HEcagLhHJwDcRrBeEIaFhWMkZa1b8CXczhpvTfdLVZNzT4W",
    userName: "City Express",
    role: 2,
    typePrice: 2,
    currency: "MXN",
    enterprises: [2, 3],
    addresses: [1, 2],
  },
];

const Categories = [
  {
    categoryName: "General",
    imageCategory: "/images/logos/gruporegio_isotipo.png",
    parentCategory: 2,
    enterprises: [3],
  },
  {
    categoryName: "Stationary",
    imageCategory: "/images/logos/gruporegio_isotipo.png",
    parentCategory: 2,
    enterprises: [1, 2],
  },
  {
    categoryName: "F&B",
    imageCategory: "/images/logos/gruporegio_isotipo.png",
    parentCategory: 2,
    enterprises: [1],
  },
];

const products = [
  {
    nameProduct: "Platinum Elite Breakfast Certificate Regular ES",
    imageProduct:
      "/images/products/platinum_elite_breakfast_certificate_regular_es.png",
    priceLocal: 100,
    priceNacional: 120,
    priceExt: 6,
    descriptionProduct: null,
    stockProduct: 200,
    unitsPackage: 100,
    published: true,
    enterpriseId: 3,
    categories: [1],
  },
  {
    nameProduct: "Elite Key Packet BE",
    imageProduct: "/images/products/elite_key_packet_be.png",
    priceLocal: 100,
    priceNacional: 125,
    priceExt: 8,
    descriptionProduct: null,
    stockProduct: 200,
    unitsPackage: 100,
    published: true,
    enterpriseId: 3,
    categories: [1],
  },
  {
    nameProduct: "GM Note Card Envelope",
    imageProduct: "/images/products/gm_note_card_envelope.png",
    priceLocal: 110,
    priceNacional: 125,
    priceExt: 7,
    descriptionProduct: null,
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 1,
    categories: [2],
  },
  {
    nameProduct: "Folio Envelope",
    imageProduct: "/images/products/folio_envelope.png",
    priceLocal: 150,
    priceNacional: 170,
    priceExt: 12,
    descriptionProduct: "some desc folio envelope",
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 1,
    categories: [2],
  },
  {
    nameProduct: "Coaster",
    imageProduct: "/images/products/coaster.png",
    priceLocal: 170,
    priceNacional: 250,
    priceExt: 16,
    descriptionProduct: "some desc folio envelope",
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 1,
    categories: [3],
  },
  {
    nameProduct: "Box City Express",
    imageProduct: "/images/products/box_city_express.jpg",
    priceLocal: 130,
    priceNacional: 145,
    priceExt: 9,
    descriptionProduct: "some desc box city",
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 2,
    categories: [2],
  },
  {
    nameProduct: "Corporate Card",
    imageProduct: "/images/products/card_city_express.jpg",
    priceLocal: 110,
    priceNacional: 125,
    priceExt: 6,
    descriptionProduct: "some desc city",
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 2,
    categories: [2],
  },
  {
    nameProduct: "Corporate Letter",
    imageProduct: "/images/products/paper_city_express.jpg",
    priceLocal: 110,
    priceNacional: 125,
    priceExt: 6,
    descriptionProduct: "some desc city",
    stockProduct: 50,
    unitsPackage: 100,
    published: true,
    enterpriseId: 2,
    categories: [2],
  },
];
