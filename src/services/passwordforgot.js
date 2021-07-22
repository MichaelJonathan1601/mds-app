import api from './api';

export const postPasswordReset = async (cpf, birth, password, token) => {
  let year = birth.substring(6, 10);
  let month = birth.substring(3, 5) - 1;
  let day = birth.substring(0, 2);

  let birthday = new Date(year, month, day).toISOString();

  console.log(cpf, birthday, password);
  // try {
  //   await api
  //     .post(
  //       `/v1/seguros-mds/forgot-password`,
  //       {
  //         cpf: cpf,
  //         birthday: birthday,
  //         password: password,
  //       },
  //       {
  //         headers: {
  //           Authorization: `BEARER ${token}`,
  //         },
  //       },
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // } catch (e) {
  //   return 'Não foi possível enviar, tente novamente';
  // }
  return 'Senha trocada!';
};
