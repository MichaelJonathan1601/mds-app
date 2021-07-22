import api from './api';

export const postQrCode = async (qrCode, accountId, token) => {
  await api
    .post(
      `/v1/seguros-mds/feedback`,
      {
        qrCodeId: qrCode,
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
};
