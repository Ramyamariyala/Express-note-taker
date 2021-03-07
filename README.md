# Unit 11 Express Homework: Note Taker

## User Story

Application provides the user to be able to write and save notes. User will be able to delete notes and save notes. It will help in organizing the day with the schedule notes.

## Table of Content

* Description
* Requirements
* License 
* Screenshots
* Link to Heroku
* Tools used

## Motivation 

Helps the users to keep track of a all the work that need to be donw for the day. Be able to take a persistent notes and saving it allow the user to work effeciently.

## Description
* Application allows the user to create notes 
* Application allows the user to save notes and    delete it
*  Application allows the user to view the previously saved notes.

# Requirments

This is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The following HTML routes should be created:

* GET /notes - Should return the notes.html file.
* GET * - Should return the index.html file
* The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

- The following API routes should be created:

- GET /api/notes - Should read the db.json file and return all saved notes as JSON.
- POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

* License

 MIT

 * Screenshots

 ![capture1](public\assets\images\Capture2.PNG)
 ![Capture2](public\assets\images\Capture1.PNG)

 * Link to Heroku


 * Tools

* Visual Studio Code https://code.visualstudio.com
* Create a package using npm init -y
* Install express package https://www.npmjs.com/package/express
* Install file system package https://www.npmjs.com/package/file-system
* Deploy application in heroku https://signup.heroku.com/
