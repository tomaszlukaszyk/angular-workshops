interface User {
  name: string;
  lastName: string;
  id: number;
}

interface Movie {
  id: number,
  title: string,
  releaseDate: Date,
  director: string,
  genres: string[],
}

interface Customer {
  name: string,
  lastName: string,
  phone: number,
  addresses: Address[],
}

interface Address {
  city: string,
  street: string,
  postalCode: string,
}
