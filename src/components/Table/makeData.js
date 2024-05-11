import { faker } from "@faker-js/faker";

export const makeData = (numberOfRows) =>
  Array(numberOfRows)
    .fill(null)
    .map(() => ({
      firstName: faker.person.firstName(),
      middleName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.person.lastName(),
      phoneNumber: faker.person.lastName(),
      address: faker.person.lastName(),
      zipCode: faker.person.lastName(),
      city: faker.person.lastName(),
      state: faker.person.lastName(),
      country: faker.person.lastName(),
      petName: faker.animal.cat(),
      age: faker.person.lastName(),
      salary: faker.person.lastName(),
      dateOfBirth: faker.person.lastName(),
      dateOfJoining: faker.person.lastName(),
      isActive: faker.person.lastName(),
    }));

export const Person = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  state: "",
  country: "",
  petName: "",
  age: 0,
  salary: "",
  dateOfBirth: "",
  dateOfJoining: "",
  isActive: "",
};
