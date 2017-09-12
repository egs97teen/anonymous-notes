import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }

  retrieveAll() {
  	return this._http.get('/api/notes').map( data => data.json() ).toPromise();
  }

  addNote(note) {
  	return this._http.post('/api/notes/add', note).map( data => data.json() ).toPromise();
  }
}
