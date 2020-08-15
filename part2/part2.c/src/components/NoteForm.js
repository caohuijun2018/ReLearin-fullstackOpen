import React , { useState }from 'react'

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')
  // eslint-disable-next-line no-redeclare
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const addNote = (event) => {
    event.preventDefault()


    createNote({
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    })
    // const noteObject = {

    //   //id: notes.length + 1,

    // }
    setNewNote('')
  }

  return (
    <div className = 'formDiv'>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm