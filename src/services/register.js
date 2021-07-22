import api from './api';

export const postRegister = async (
  name,
  cpf,
  birth,
  email,
  phone,
  password,
  terms,
) => {
  let year = birth.substring(6, 10);
  let month = birth.substring(3, 5) - 1;
  let day = birth.substring(0, 2);

  let birthday = new Date(year, month, day).toISOString();

  console.log({
    name,
    cpf,
    birthday,
    email,
    phone,
    password,
    terms,
  });

  try {
    const response = await api.post('/v1/seguros-mds/account', {
      name,
      cpf,
      birthday,
      email,
      phone,
      password,
      terms,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
