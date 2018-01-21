import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
      this.taskService.getTask()
          .subscribe(
              (task: any[]) => {
                  this.tasks = task;
              }, (error) => console.log(error)
          );
    // this.tasks.push(new Task(1, "Task1", true, "01/01/18"));
    // this.tasks.push(new Task(2, "Task2", false, "02/02/18"));
    // this.tasks.push(new Task(3, "Task3", false, "03/02/18"));
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(event, task) {
    console.log("Task has changed");
  }
}
