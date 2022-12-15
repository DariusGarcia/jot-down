const express = require('express')

// import routes
const api = require('./routes/api/api')
const defaultRoutes = require('./routes/default/defaultRoutes')

const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', api)
app.use('/', defaultRoutes)

// start express app
app.listen(PORT, () =>
	console.log(`Server started. Listening on PORT: ${PORT}`)
)
