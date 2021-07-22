import api from './api';

export const postWhatsApp = async (accountId, token) => {
  try {
    await api
      .post(
        `/v1/seguros-mds/smartzap`,
        {
          accountId: accountId,
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
    return 1;
  } catch (e) {
    console.log(e);
  }
};
