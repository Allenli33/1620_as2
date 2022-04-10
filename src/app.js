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
CancelBtn.id = 'cancel-button';



// Create note taking area
const CreateText = document.querySelector('.icons')
const WriteText = document.querySelector('.write-note-area')

const NoteArea = `<textarea id ="new-note"
  rows="30" cols="60">Write something here</textarea>`
function CTextArea() {
  WriteText.insertAdjacentHTML('afterbegin', NoteArea)
  WriteText.appendChild(SaveBtn)
  WriteText.appendChild(CancelBtn)
}

CreateText.addEventListener('click', CTextArea)


//Cancel textare
function CancelText() {
  SaveBtn.remove()
  CancelBtn.remove()
  let node = document.getElementById("new-note");
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}
CancelBtn.addEventListener('click', CancelText)
