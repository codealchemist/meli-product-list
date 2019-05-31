const sellerId = '51776267'

export function getSeller() {
  const url = `https://api.mercadolibre.com/users/${sellerId}`
  return fetch(url).then(response => response.json())
}

export function getProducts() {
  const url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=${sellerId}`
  return fetch(url).then(response => response.json())
}