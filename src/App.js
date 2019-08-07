import React, { Component } from 'react';
import './App.css';
import AddNote from './components/addnote';
import NoteSelected from './components/noteselected';
import Sidebar from './components/sidebar';

class App extends Component {
  state = {
    title: '',
    text: '',
    notesArray: []
  }

  setTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  setText = (event) => {
    this.setState({ text: event.target.value })
  }

  handleNoteAdd = (event) => {
    let note = `${this.state.title} - ${this.state.text}`
    this.state.notesArray.push(note);
    console.log(this.state.notesArray)
    this.clearForm()
    // this.setState({ notesArray: event.target.value})
  }

  viewingNote = (event) => {

  }

  clearForm = () => {
    document.getElementById('form').reset()
    this.setState({ title: '' })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div id='appContainer'>
        <div id='left'>
          <Sidebar notesArray={this.state.notesArray} />
        </div>
        <div id='right'>
          <AddNote clicked={this.handleNoteAdd} setTitle={this.setTitle} setText={this.setText} clearForm={this.clearForm}/>
          <NoteSelected />
        </div>
      </div>
    )
  }
}


export default App;