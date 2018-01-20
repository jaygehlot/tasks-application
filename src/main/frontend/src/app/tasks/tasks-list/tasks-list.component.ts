import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1, "Task1", true, "01/01/2018"));
    this.tasks.push(new Task(2, "Task2", true, "02/02/2018"));
    this.tasks.push(new Task(3, "Task3", true, "03/02/2018"));
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task) {
    console.log("Task has changed");
  }
}
