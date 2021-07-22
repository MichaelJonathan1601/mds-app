import api from './api';

export const getPoints = async (userAccountId, token) => {
  console.log(userAccountId);
  await api
    .get(
      `/v1/seguros-mds/points-details?accountId=D95D3555-6673-4C2B-1CFE-08D730480273`,
      {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      },
    )
    .then((res) => {
      console.log(res);
    });
};

// .get(`/v1/mdsbrasil/policies?accountId=${userLogin.accountId}`, {
//   headers: {
//     Authorization: `BEARER ${token}`,
//   },
// })
// .then((res) => {
//   console.log(res);
// });
