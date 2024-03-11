import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Task } from './Task';


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  arr_box3: any = []
  user: any = {}
  count: number = 1;
  count_token: any = 0;
  token_id: any = { id: 0 }
  number_token: any = 0;
  t1: any = {}
  token1: any = {}
  object_token: any = {}
  t13: any = {}
  token13: any = {}
  //=======select===
  selectedHero: Task;
  status: any = ''
  executor: any = ''
  select: boolean = false;

  constructor() { }

  show_task() {
    var l1 = localStorage.length
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      this.t13 = localStorage.getItem(key)
      this.token13 = JSON.parse(this.t13)
      this.arr_box3.push(this.token13) //SHOW DATA !!!!
      this.arr_box3.sort((a: any, b: any) => Number(a.id) - Number(b.id));
    }
  }

  addTask(user: Task) {
    this.count = localStorage.length
    var id = this.count++;
    this.number_token = id.toString() //make string key token
    this.token_id = { id: id }
    // console.log(user, 'IDDDD', this.token_id)
    this.object_token = Object.assign(this.token_id, user)
    localStorage.setItem(this.number_token, JSON.stringify(this.object_token))//set token on server
    //==========================get token
    this.t1 = localStorage.getItem(this.number_token)//GET TOKEN FROM CONSOLE
    this.token1 = JSON.parse(this.t1)
    this.arr_box3.push(this.token1)
    this.user = {}
  }
  onSelect(s: Task): void {
    // console.log(s, 'SELECT')
    this.select = true;
    this.selectedHero = s;
    this.status = this.selectedHero.status
    this.executor = this.selectedHero.executor
  }
  changeTask(status: any, executor: any) {
    this.select = false;
    this.selectedHero
    let body = {
      id: this.selectedHero.id,
      headline: this.selectedHero.headline,
      title: this.selectedHero.title,
      deadline: this.selectedHero.deadline,
      priority: this.selectedHero.priority,
      status: status,
      executor: executor
    };
    this.number_token = this.selectedHero.id.toString()
    localStorage.setItem(this.number_token, JSON.stringify(body))
    this.arr_box3.push(body)
    this.arr_box3 = this.arr_box3.reverse().filter((v: any, i: any, a: any) => a.map((e: any) => e.id).indexOf(v.id) === i);
    this.arr_box3.sort((a: any, b: any) => Number(a.id) - Number(b.id));

  }

  clearLS() {
    localStorage.clear()
  }

  ngOnInit(): void {
    this.show_task()
  }

}
