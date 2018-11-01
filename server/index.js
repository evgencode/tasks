const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const config = require('./config')
const { notFound, error500 } = require('./middlewares')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const staticDir = path.resolve(__dirname, '../static')
const imageDir = path.resolve(__dirname, '../images')
const publicDir = path.resolve(__dirname, '../public')

/**
 * Static folders
 */
app.use(`/images`, express.static(imageDir))
app.use(`/static`, express.static(staticDir))

/**
 * Allowed frontend routes
 */
const routes = ['/users/:uuid/info', '/users/:uuid', '/alltasks', '/']
app.use(routes, express.static(publicDir))

app.use(notFound(path.join(publicDir, '/index.html')))
app.use(error500)

/**
 * Run
 */
app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
