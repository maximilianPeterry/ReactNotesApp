import React, { Component } from 'react';
import './App.css';
import AddNote from './components/addnote';
import SideBar from './components/sidebar';
import NoteSelected from './components/noteselected';

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
  }


  render() {
    return (
      <div id='appContainer'>
        <div id='left'>
          <SideBar />
        </div>
        <div id='right'>
          <AddNote clicked={this.handleNoteAdd} setTitle={this.setTitle} setText={this.setText} />
          <NoteSelected notesArray={this.state.notesArray} />
        </div>
      </div>
    )
  }
}


export default App;