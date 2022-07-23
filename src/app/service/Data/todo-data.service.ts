import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveTodos(username:string){
      return this.httpClient.get<Todos[]>(`${API_URL}/users/${username}/todos`)
  }

  deleteTodo(username:string, id:number){
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username:string, id:number){
    return this.httpClient.get<Todos>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id:number,todo:Todos){
    return this.httpClient.put(`${API_URL}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username:string, todo:Todos){
    return this.httpClient.post(`${API_URL}/users/${username}/todos}`, todo)
  }
}
