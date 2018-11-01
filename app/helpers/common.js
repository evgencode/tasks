const mapToJson = map => JSON.stringify([...map])

const jsonToMap = jsonStr => new Map(JSON.parse(jsonStr))
