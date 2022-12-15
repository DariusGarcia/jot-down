// libs to help read/write to db
const fs = require('fs')
const util = require('util')

// returns an object as a promise
const readData = util.promisify(fs.readFile)
const writeData = util.promisify(fs.writeFile)
const { v1: uuid } = require('uuid')

class dbUtil {
	// returns all data from db.json
	readNote() {
		return readData('../db/db.json', 'utf-8')
	}
	// writes data to db.json
	writeNote() {
		return writeData('../db/db.json', JSON.stringify(data))
	}
	// returns all saved notes and makes a new array
	fetchData() {
		return this.readNote().then((data) => {
			let notesData

			if (typeof notesData != Array) {
				notesData = []
			} else {
				notesData = [].concat(JSON.parse(data))
			}

			return notesData
		})
	}

	// get all notes that want to be saved and push it into the existing notes array
	fetchNotes() {
		return this.readNote().then((notes) => {
			let tempNotesArray
			try {
				tempNotesArray = [].concat(JSON.parse(notes))
			} catch (err) {
				tempNotesArray = []
			}
			return tempNotesArray
		})
	}

	// save new note to db.json
	saveNote(data) {
		const { title, text } = data
		if (data.title === null || data.text === null) {
			console.log('Cant be empty.')
			return
		}
		const noteToAdd = { title, text, id: uuid() }

		return this.fetchData()
			.then((data) => [...data, noteToAdd])
			.then((notesArray) => this.writeData(notesArray))
			.then(() => noteToAdd)
	}

	// function to remove the saved note from the db
	removeSavedNote(id) {
		return this.fetchNotes()
			.then((res) => res.filter((note) => note.id !== id))
			.then((newNoteArray) => this.writeNote(newNoteArray))
	}
}

module.exports = new dbUtil()
