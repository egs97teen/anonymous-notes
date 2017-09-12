import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Anonymous Notes';
  noteList = [];
  errors = [];

  constructor(private _noteService: NoteService) {}

  getAll(){
  	this._noteService.retrieveAll().then( data => this.noteList = data).catch( err => { this.errors = err.errors });
  }

  ngOnInit() {
	this.getAll();
  }

  addNewNote(newNote){
  	this._noteService.addNote(newNote).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }
}
