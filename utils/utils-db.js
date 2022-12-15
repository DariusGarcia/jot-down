// libs to help read/write to db
const fs = require('fs')
const util = require('util')

// returns an object as a promise
const readData = util.promisify(fs.readFile)
const writeData = util.promisify(fs.writeFile)
const uuidv1 = require('uuid/v1')

class dbUtil {
	// returns all saved notes and makes a new array
	fetchData() {
		return readNote().then((data) => {
			let notesData

			if (typeof notesData != Array) {
				notesData = []
			} else {
				notesData = [].concat(JSON.parse(data))
			}

			return notesData
		})
	}
	// returns all data from db.json
	readNote() {
		return readData('../db/db.json', 'utf-8')
	}
	// writes data to db.json
	writeNote() {
		return writeData('../db/db.json', JSON.stringify(data))
	}

	saveNote(data) {
		const { title, text } = note
		if (data.title === null || data.text === null) {
			console.log('Cant be empty.')
			return
		}
		const noteToAdd = { title, text, id: uuidv1() }

		return fetchData()
			.then((data) => [...data, noteToAdd])
			.then((notesArray) => writeData(notesArray))
			.then(() => noteToAdd)
	}
}
