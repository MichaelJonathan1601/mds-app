import api from './api';

export const postAgenda = async (accountId, date, desc, sector, token) => {
  try {
    await api
      .post(
        `/v1/seguros-mds/scheduling`,
        {
          accountId: accountId,
          date: date,
          message: desc,
          active: true,
          sector: sector,
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
