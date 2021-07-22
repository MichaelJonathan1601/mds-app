import api from './api';

export const postLogin = async (cpf, password, dispatch) => {
  if (cpf !== '' && password !== '') {
    dispatch({
      type: 'USER_LOGIN_LOADING',
    });
    try {
      await api.post('/v1/seguros-mds/login', {cpf, password}).then((res) => {
        console.log(res.data);
        dispatch({
          type: 'USER_TOKEN',
          payload: res.data.token,
        });
        dispatch({
          type: 'USER_ID',
          payload: res.data.account.accountId,
        });

        getLogin(res.data.account.accountId, res.data.token, dispatch);
      });
    } catch (error) {
      dispatch({
        type: 'USER_LOGIN_FAIL',
      });
      console.log(error);
      return 'Não foi possível fazer Login';
    }
    return 1;
  } else {
    return 'Preencha todos os campos';
  }
};

export const getLogin = async (ID, token, dispatch) => {
  try {
    await api
      .get(`https://api.mdsinsure.com/v1/seguros-mds/account?accountId=${ID}`, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: 'USER_INFO',
          payload: res.data,
        });
        dispatch({
          type: 'USER_LOGIN_SUCCESS',
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const putAccount = async (
  accountId,
  token,
  addresses,
  name,
  cpf,
  birth,
  email,
  phone,
  terms,
) => {
  let year = birth.substring(6, 10);
  let month = birth.substring(3, 5) - 1;
  let day = birth.substring(0, 2);

  let birthday = new Date(year, month, day).toISOString();

  console.log({accountId, name, cpf, birthday, email, phone, terms, addresses});
  try {
    await api
      .put(
        `https://api.mdsinsure.com/v1/seguros-mds/account`,
        {accountId, name, cpf, birthday, email, phone, terms, addresses},
        {
          headers: {
            Authorization: `BEARER ${token}`,
          },
        },
      )
      .then((res) => {
        console.log(res.status);
      });
  } catch (error) {
    console.log(error);
  }
};
