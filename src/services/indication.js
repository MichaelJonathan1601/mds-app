import api from './api';

export const getIndicationAccount = async (coupon, token) => {
  try {
    await api
      .get(`/v1/seguros-mds/get-account-indication?coupon=${coupon}`, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  } catch (e) {
    console.log(e);
  }
};
