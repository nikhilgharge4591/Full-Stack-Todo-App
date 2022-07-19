import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/Data/todo-data.service';
import { Router } from '@angular/router';

export class Todos{
  constructor(public id:number, public description:string, public done:boolean, public targetDate:Date){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todos[] = [];

  message:string = "";

  // todos = [ new Todos(1, 'Learn to Dance', false, new Date()),
  //           new Todos(2, 'Become an SDE', false, new Date()),
  //           new Todos(3, 'Buy a Merc', false, new Date())];

  constructor(private todoService: TodoDataService, private router:Router) { }



  ngOnInit(): void {
    this.todoService.retrieveTodos("Nikhilgharge93@gmail.com").subscribe(
      (response:any) => {
        console.log(response)
        this.todos = response;
      }
    );
  }

  deleteTodo(id:number){
    console.log("Delete ToDo");
    this.todoService.deleteTodo("Nikhilgharge93@gmail.com", id).subscribe(
      (response:any) => {
            console.log(response);
            //this.todos = response;
            this.message = "Delete Successful !!!";
      }
    );
  }

  updateTodo(id:number){
    console.log("Update Todo");
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    console.log("Add Todo");
    this.router.navigate(['todos', -1]);
  }

}
