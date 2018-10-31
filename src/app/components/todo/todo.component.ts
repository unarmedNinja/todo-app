import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  private todoId : string;
  private todo : Todo;

  constructor(private route: ActivatedRoute, private todoService: TodosService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("todo params: ", params);
      //this.todoId = +params['id'] || 0; // (+) converts string 'id' to a number
      this.todoId = params['id'] || 0
      this.getTodoById(this.todoId);      
   });
  }

  getTodoById(todoId: string) : void {
      this.todoService.getTodo(todoId).subscribe(todoObj => this.todo = todoObj);
  }

  updateTodo() {
    console.log("updating todo: ", this.todo);
    this.todoService.updateTodo(this.todo).subscribe(todoObj => this.todo = todoObj);
  }
}
