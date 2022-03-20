import type { Address } from "node:cluster";

export type Adress = {
  city: String,
  geo: {
    lat: String;
    lgn: String;
  },
  street: String;
  suite: String;
  zipcode: String;
  company: {
    bs: String;
    catchPhrase: String;
    name: String;
    phone: String;
    username: String;
    website: String;
  };
};

export type Item = {
  id: Number,
  name: String,
  username: String,
  email: String,
  address: Address[],
};