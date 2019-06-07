const baseUrl = 'https://api.mercadolibre.com'

export function getSeller(sellerId) {
  const url = `${baseUrl}/users/${sellerId}`
  return fetch(url).then(response => response.json())
}

export function getProducts({ sellerId, offset = 0, query = '' }) {
  const url = `${baseUrl}/sites/MLA/search?seller_id=${sellerId}&offset=${offset}&q=${query}`
  return fetch(url).then(response => response.json())
}
