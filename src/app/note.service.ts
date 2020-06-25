import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { AuthenticationService } from './services/authentication.service';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class NoteService {

  constructor(private httpClient : HttpClient, private authService : AuthenticationService) { }

  getNotes(){
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${this.authService.getAuthToken()}`
      )
    })
  }

  addNote(note:Note){
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers : new HttpHeaders().set(
        'Authorization',`Bearer ${this.authService.getAuthToken()}`
      )
    })
  }

  
}
