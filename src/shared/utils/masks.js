var grey = '#7c7b7b';
var red = '#ce4257';


export function formatDate(d) {
  try{
    let x = new Date(d);

    console.log(x);
    return (
      ('0' + x.getDate()).slice(-2) +
      '/' +
      ('0' + (x.getMonth() + 1)).slice(-2) +
      '/' +
      x.getFullYear()
    );
  }catch(e){
    console.log(e)
  };
  
}

export function cpfMask(cpf) {
  let mask = cpf;
  mask = mask.replace(/\D/g, ''); //Remove tudo o que não é dígito
  mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
  mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
  mask = mask.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return mask;
}

export function birthMask(birth) {
  let b = birth;
  b = b.replace(/\D/g, '');
  b = b.replace(/(\d{2})(\d)/, '$1/$2');
  b = b.replace(/(\d{2})(\d)/, '$1/$2');
  return b;
}

export function celMask(tel) {
  let v = tel;
  v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2');
  return v;
}

export function cepMask(cep) {
  let mask = cep;
  mask = mask.replace(/\D/g, ''); //Remove tudo o que não é dígito
  mask = mask.replace(/(\d{2})(\d)/, '$1.$2');
  mask = mask.replace(/(\d{3})(\d)/, '$1-$2');
  return mask;
}

export function inputViewRed(data, colorChange) {
  if (colorChange && data == '') {
    return {borderBottomColor: red};
  } else {
    return {borderBottomColor: grey};
  }
}

export function dataStyle(data, colorChange) {
  if (colorChange && data.length < 10) {
    return true;
  } else {
    return false;
  }
}

export function cpfStyle(data, colorChange) {
  if (colorChange && data.length < 14) {
    return true;
  } else {
    return false;
  }
}

export function mailStyle(data, colorChange) {
  if (
    (colorChange && data.search('@') == -1) ||
    (colorChange && data.search('.com') == -1)
  ) {
    return {borderBottomColor: red};
  } else {
    return {borderBottomColor: grey};
  }
}

export function phoneStyle(data, colorChange) {
  if (colorChange && data.length < 15) {
    return {borderBottomColor: red};
  } else {
    return {borderBottomColor: grey};
  }
}

export function pswCompareStyle(data, data2, colorChange) {
  if (
    (colorChange && data.length < 6) ||
    (colorChange && data.length == '') ||
    (colorChange && data !== data2)
  ) {
    return {borderBottomColor: red};
  } else {
    return {borderBottomColor: grey};
  }
}

export function pswStyle(data, colorChange) {
  if (colorChange && data.length < 5) {
    return true;
  } else {
    return false;
  }
}
