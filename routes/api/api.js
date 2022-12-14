const router = require('express').Router()

// connecting sql db
// const db = mysql.createConnection(
// 	{
// 		host: 'localHost',
// 		user: 'root',
// 		password: 'Slugger132435!',
// 		database: 'users_db',
// 	},
// 	console.log(`Connected to the users_db database.`)
// )

router.get('/users', (req, res) => {
	res.json('hello there').sendStatus(200)
})

router.post('/users', (req, res) => {
	res.json(req.body)
})

// app.get('/api/users', (req, res) => {
// 	db.query('SELECT * FROM users', function (err, results) {
// 		if (err) throw err
// 		res.json(results)
// 	})
// })
module.exports = router
