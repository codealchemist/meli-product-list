// const sellerId = '51776267'

export function getSeller(sellerId) {
  const url = `https://api.mercadolibre.com/users/${sellerId}`
  return fetch(url).then(response => response.json())
}

export function getProducts(sellerId, offset = 0) {
  const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${sellerId}&offset=${offset}`
  return fetch(url).then(response => response.json())
}
