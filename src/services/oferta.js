import api from './api';

export const postOffer = async (accountId, productId, date, token) => {
  try {
    await api
      .post(
        `/v1/seguros-mds/notifydue`,
        {
          accountId: accountId,
          productId: productId,
          date: date,
          active: true,
        },
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  } catch (e) {
    console.log(e);
    return 'Não foi possível agendar, tente novamente';
  }
  return 'Agendamento Concluído';
};
