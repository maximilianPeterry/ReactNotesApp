import React, { Component } from 'react';
import './App.css';
import AddNote from './components/addnote';
import NoteSelected from './components/noteselected';
import Sidebar from './components/sidebar';

class App extends Component {
  state = {
    title: '',
    text: '',
    notesArray: [],
    titlesArray: [],
    textsArray: [],
    notesObj: []
  }

  setTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  setText = (event) => {
    this.setState({ text: event.target.value })
  }

  handleNoteAdd = (event) => {
    let note = `${this.state.title} - ${this.state.text}`
    let noteTitle = `${this.state.title}`
    let noteText = `${this.state.text}`
    let notePair = {title: noteTitle, text:noteText}
    this.state.notesArray.push(note);
    this.state.notesObj.push(notePair)
    this.state.titlesArray.push(noteTitle);
    this.state.textsArray.push(noteText);
    console.log(this.state.notesArray);
    console.log(this.state.titlesArray);
    console.log(this.state.textsArray);
    console.log(this.state.notesObj)
    this.clearForm()
    // this.setState({ notesArray: event.target.value})
  }

  // handleMaps = () => {
  //   this.state.titlesArray.map(noteTitle => 
  //     return (<h1>{ noteTitle }</h1>)
  // })}
  // }

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
          <Sidebar notesObj={this.state.notesObj} />
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

//possibly separate titleArray.map and textArray.map
//=> two separate functional components
//=> join togehter in new component
//=> bring back to app