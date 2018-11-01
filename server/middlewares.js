const notFound = file => (req, res) => {
  res.status(404)
  return res.sendFile(file)
}

const error500 = (error, req, res, next) => {
  if (req.app.get('env') === 'development') {
    console.error(error)
    if (req.method === 'GET') {
      next(error)
    } else {
      res.status(500).send(error)
    }
  } else {
    res.status(500).send({ message: 'Error 500. Something went wrong.' })
  }
}

module.exports = {
  notFound,
  error500
}
