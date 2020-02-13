export function joinData(geo, data) {
  const obj = {}
  data.forEach(item => {
    obj[item.provinceName] = item
  })
  geo.features = geo.features.map(item => {
    const name = item.properties.name
    item.properties = {
      ...item.properties,
      ...obj[name]
    }
    return item
  })
  return geo
}