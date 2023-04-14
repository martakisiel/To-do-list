import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [ //it is now a Task array not string array
  new Task("visit Ann"), //new creates new object of specific data type
  new Task("call Dad"),
  new Task("learn Angular"),
  new Task("go for a walk")
]

add(newTask: string){ //string is changed to Task
  this.tasks.push(new Task(newTask)) //push function add new item to array
  // alert("newTask")
}

remove(existingTask: Task){ //string is changed to Task
  var userConfirmed = confirm("'Are you sure to remove the following task?'") //to coś nie działą \n ${existingTask}) 
  //alert("remove:(")
  if(userConfirmed){
    this.tasks = this.tasks.filter(task => task != existingTask);
  }
}

// toggleIsDone(task:Task){
//   //alert('The task: ' + task + ' is done')
//   // task.isDone = true;
//   task.isDone = !task.isDone; //this should provide functionality to "undo" button
// }

}  

class Task{ // new data type: Task
constructor(public title: string){

}
toggleIsDone(){ //because this toggle is related to Task class it is now here and some changes must be made
      this.isDone = !this.isDone; //this should provide functionality to "undo" button
}

public isDone = false;

}


