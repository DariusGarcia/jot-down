const router = require('express').Router()
const util = require('../../utils/utils-db')

router.get('/notes', (req, res) => {
	util.fetchData().then((data) => {
		return res.json(data)
	})
})

router.post('/users', (req, res) => {
	res.json(req.body)
})

module.exports = router
