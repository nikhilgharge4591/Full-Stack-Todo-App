import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/Data/todo-data.service';
import { Todos } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number = 1;
  todo:Todos = {} as Todos;

  constructor(private todoService: TodoDataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //this.todo = new Todos(1, '', false, new Date());

    if(this.id != -1){
      this.todoService.retrieveTodo('Nikhilgharge93@gmail.com', this.id).subscribe(
        (response:any) => {
          this.todo = response;
        }
    );
    }
    
  }

  saveTodo(){
    console.log("Save Button Clicked");
    if(this.id === -1){
      // Create Todo
      this.todoService.createTodo('Nikhilgharge93@gmail.com', this.todo).subscribe(
        (response:any) => {console.log(response)
          this.router.navigate(['/todos'])
        }
      );
    }else{
      this.todoService.updateTodo('Nikhilgharge93@gmail.com', this.id,this.todo).subscribe(
        (response:any) => {console.log(response)
          this.router.navigate(['/todos'])
        }
      );
    }

  }

}
