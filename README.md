# Express.js: Note Taker App

## Description

The application is called Note Taker that can be used to write and save notes. This application will use an Express.js backend and will save and retrieve note data from a JSON file.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```
## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Screenshot

![Notes page screenshot](./Develop/public/assets/images/notes.JPG)
![Notes CLI screenshot](./Develop/public/assets/images/noteCLI.JPG)

## Routes

HTML routes

* `GET /notes` return the `notes.html` file.

* `GET *` return the `index.html` file.

 API routes 

* `GET /api/notes` read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. 

## Table of Contents

* Title

* Description

* User Story

* Acceptance Criteria

* Screenshot

* Routes

* Table of Contents

* Installation

* Usage

* Questions

* Urls

## Installation

```md
npm install 
```

## Usage

```md
node server.js
```

## Questions
Contact with me with any questions : [GitHub](https://github.com/kinziva)<br />

## Urls
* Repository [Repository URL ](https://github.com/kinziva/noteTakeApp)
* Application [Application URL ]()

