const router = require('express').Router()
const dbUtil = require('../../utils/utils-db')

router.get('/notes', (req, res) => {
	dbUtil
		.fetchData()
		.then((data) => {
			return res.json(data)
		})
		.catch((err) => res.status(500).json(err))
})

router.post('/notes', (req, res) => {
	dbUtil
		.saveNote(req.body)
		.then((data) => {
			res.json(data)
		})
		.catch((err) => res.status(500).json(err))
})

module.exports = router
