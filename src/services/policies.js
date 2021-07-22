import api from './api';

export const getPolicies = async (userAccountId, token, dispatch) => {
  let x;
  await api
    .get(
      `/v1/mdsbrasil/policies?accountId=D95D3555-6673-4C2B-1CFE-08D730480273`,
      {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      },
    )
    .then((res) => {
      dispatch({
        type: 'USER_POLICIES',
        payload: res.data,
      });
      x = res.data;
    });
  return x;
};

// .get(
//   `/v1/mdsbrasil/policies?accountId=${userAccountId}`,
//   {
//     headers: {
//       Authorization: `BEARER ${token}`,
//     },
//   },
// )
//D95D3555-6673-4C2B-1CFE-08D730480273
