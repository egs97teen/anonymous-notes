import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  constructor(private _noteService: NoteService) { }
  note = {
  	content: ''
  }

  @Output() createNote = new EventEmitter();

  ngOnInit() {}
  
  newNote() {
  	this.createNote.emit(this.note);
  }

}
