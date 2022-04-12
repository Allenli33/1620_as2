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

const CancelReadBtn = document.createElement('button')
CancelReadBtn.innerHTML = 'Close'
CancelReadBtn.id = 'cancel-read-button';



// Create note taking area

const CreateText = document.querySelector('.create-note-area .icons')
const WriteText = document.querySelector('.write-note-area')
const NoteArea = `<textarea id ="new-note"
  rows="30" cols="60"></textarea>`
function CTextArea() {
  WriteText.insertAdjacentHTML('afterbegin', NoteArea)
  WriteText.appendChild(SaveBtn)
  WriteText.appendChild(CancelBtn)
  CreateText.remove()
}

CreateText.addEventListener('click', CTextArea)


//Cancel textare
const createNotearea = document.querySelector('.create-note-area')
function CancelText() {
  SaveBtn.remove()
  CancelBtn.remove()
  let node = document.getElementById("new-note");
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
  createNotearea.appendChild(CreateText)
}
CancelBtn.addEventListener('click', CancelText)

// Save notes

const Noteslist = document.querySelector('.notes-list')
function SaveNotes() {
	let txtarea = document.querySelector('#new-note').value
	let title,para;
	if (txtarea.indexOf("\n")!=-1) {
		title = txtarea.substr(0, txtarea.indexOf("\n"));
		para = txtarea.substr(txtarea.indexOf("\n")+1);
	} else {
		title = txtarea;
		para = "";
	}
	notes.push({ 
		title: title, 
		noteBody: para,
		id: notes.length + 1 
	})	
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(title));
	li.setAttribute("id", notes.length-1);
	Noteslist.appendChild(li);
	li.addEventListener('click', ReadNote)
	
	CancelText()
}
SaveBtn.addEventListener('click', SaveNotes)

// Create Read Note
const ReadNoteArea = document.querySelector('.read-note-area')
function ReadNote() {
	if (document.getElementById("new-note")) {
		CancelText()
	}
	ReadNoteArea.innerHTML = '<div id="read-note"><h1>'+notes[this.id].title+'</h1><p>'+notes[this.id].noteBody+'<br></p></div>';
	ReadNoteArea.appendChild(CancelReadBtn)
	CancelReadBtn.addEventListener('click', CancelReadNote)
}

function CancelReadNote() {
	ReadNoteArea.innerHTML='';
}
