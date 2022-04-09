const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//save and cancel button
const SaveBtn = document.createElement('button')
SaveBtn.innerHTML = 'Save'
SaveBtn.id = 'save-button';


const CancelBtn = document.createElement('button')
CancelBtn.innerHTML = 'Cancel'
CancelBtn.id = 'Cancel-button';


// Create note taking area
const CreateText = document.querySelector('.icons')
const WriteText = document.querySelector('.write-note-area')
const noteArea = <textarea rows="30" cols="40"></textarea>
function TextArea() {

}

