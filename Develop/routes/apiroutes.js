// Dependencies 
const jsonData = require('../db/db.json');
const fs = require('fs')
const uniqid = require('uniqid');


module.exports = (app) => {
    // Notes Array
    let saveNotes = [];

    //GET notes
    app.get('/api/notes', (req, res) => {

        //read from json and send it to user.
        fs.readFile('./Develop/db/db.json', (err, notes) => {
            if (err) throw err;
            res.send(notes)

        });

    })


    //SAVE notes
    app.post('/api/notes', (req, res) => {

        console.log(req.body)
        //Notes Object
        let notesArray  = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        }
        //READ json
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            saveNotes = JSON.parse(data)
            //add notes to notesArray
            saveNotes.push(notesArray);

            //saved notes will be written on JSON
            fs.writeFile('./Develop/db/db.json', JSON.stringify(saveNotes), (err) => {
                if (err) throw err;
                console.log('New note added into Json');
                res.json(jsonData)
            });
        });
    });

    //DELETE note
    app.delete('/api/notes/:id', (req, res) => {
        let deleteNote = req.params.id;
        for (let i = 0; i < saveNotes.length; i++){

            if (saveNotes[i].id === deleteNote){
                saveNotes.splice(i, 1);
            }

        }

        fs.writeFile('./Develop/db/db.json', JSON.stringify(saveNotes), (err) => {
            if (err) throw err;
            console.log('Selected Note is deleted');

        });

        res.send(jsonData);
    });
}