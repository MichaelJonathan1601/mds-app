import api from './api';

export const postFeedback = async (
  accountId,
  helpful,
  performance,
  friendly,
  description,
  token,
) => {
  try {
    await api
      .post(
        `/v1/seguros-mds/feedback`,
        {
          accountId: accountId,
          helpful: helpful,
          performance: performance,
          interface: friendly,
          description: description,
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
    return 'Não foi possível enviar, tente novamente';
  }
  return 'Obrigado pelo Feedback!';
};
