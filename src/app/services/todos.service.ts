import { Injectable } from '@angular/core';
import { Todo } from  '../models/todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosApi = 'http://cloudvps:3000/t/all';  // URL to web api
  private todosApiById = 'http://cloudvps:3000/t/';  // URL to web api
  private todosApiUpdate = "http://cloudvps:3000/t/";
  private list : Todo[];

  constructor(private http: HttpClient) { 
    this.list = new Array<Todo>();
    let T = new Todo();
    T.id = 1;
    T.name = "Test 1";
    T.description = "first item";

    this.list.push(T);
  }

  getTodosStatic() : Observable<Todo[]> {    
    console.log("retrieving todos: ", this.list);
    return of(this.list);
  }

  getTodos() : Observable<Todo[]> {    
    return this.http.get<Todo[]>(this.todosApi);
  }

  getTodo(todoId: string) : Observable<Todo> {    
    return this.http.get<Todo>(this.todosApiById + todoId);
  }

  updateTodo(todo: Todo) {
    let id = todo._id;
    //cant update primary key, so remove it;
    delete todo._id;

    return this.http.put<Todo>(this.todosApiUpdate + id, todo);
  }

}
