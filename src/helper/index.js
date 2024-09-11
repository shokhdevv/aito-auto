export const langSelect = ( lang , ru  ,uz) => {
  if(lang === 'ru')  {
      return ru
  }else if(lang === 'uz') {
      return uz
  }
}

export const priceView = (price) => {
  return  price?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')
}

export const formatPhoneNumber =(originalString) => {
  return originalString?.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

