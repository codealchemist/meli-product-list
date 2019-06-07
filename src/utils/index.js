export function isValidQuery(query) {
  if (query === '' || query === undefined) return true
  return query.match(/^[a-z 0-9]+/)
}
