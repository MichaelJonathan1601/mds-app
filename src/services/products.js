import api from './api';

export const getProducts = async (token, dispatch) => {
  await api
    .get(`/v1/seguros-mds/products?page=1&rowsPerPage=14`, {
      headers: {
        Authorization: `BEARER ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: 'PRODUCTS',
        payload: res.data,
      });
      console.log(res.data);
    });
};

export const getProductDetail = async (tag, token) => {
  let x;
  await api
    .get(`/v1/seguros-mds/product-detail?tag=${tag}`, {
      headers: {
        Authorization: `BEARER ${token}`,
      },
    })
    .then((res) => {
      x = res.data.description;
      console.log(res.data);
    });
  return x;
};

export const postProductAccount = async (productId, accountId, token) => {
  let x;
  await api
    .post(
      `/v1/seguros-mds/product-account`,
      {
        productId: productId,
        accountId: accountId,
      },
      {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      },
    )
    .then((res) => {
      x = res.data;
      console.log(res.data);
    });
  return x;
};
