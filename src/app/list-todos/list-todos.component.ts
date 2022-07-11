import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(public id:Number, public description:string, public done:boolean, public targetDate:Date){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [ new Todos(1, 'Learn to Dance', false, new Date()),
            new Todos(2, 'Become an SDE', false, new Date()),
            new Todos(3, 'Buy a Merc', false, new Date())];

  constructor() { }



  ngOnInit(): void {
  }

}
