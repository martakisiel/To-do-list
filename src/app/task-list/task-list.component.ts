import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void{
    var date: Date = new Date(this.route.snapshot.params['date']); //Now the task-list know which date was clicked before
    console.log(date);

  }
  tasks: Task[] = [ //it is now a Task array not string array
  new Task("visit Ann"), //new keyword creates new object of specific (here:Task) data type
  new Task("call Dad"),
  new Task("learn Angular"),
  new Task("go for a walk")
]

add(newTask: string){ //string is changed to Task, but later on Task is again changed to string
  this.tasks.push(new Task(newTask))//push function add new item to array
  // alert("newTask")
}

remove(existingTask: Task){ //string is changed to Task
  var userConfirmed = confirm("'Are you sure to remove the following task?'") //to coś nie działą \n ${existingTask}) 
  //alert("remove:(")
  if(userConfirmed){
    this.tasks = this.tasks.filter(task => task != existingTask);
  }
}

// markAsDone(task: Task){//this one is replaced with toggleIsDone method
//   alert('The task:"' + task + '" is done')
//   task.isDone = true;
// }
// toggleIsDone(task:Task){ //this one is moved to class below
//   //alert('The task: ' + task + ' is done')
//   // task.isDone = true;
//   task.isDone = !task.isDone; //this should provide functionality to "undo" button
// }

} 

class Task{ // new data type: Task
constructor(public title: string){

}

toggleIsDone(){ //because this toggle is related to Task class it is now here and some changes must be made
      this.isDone = !this.isDone; //this expression should provide functionality to "undo" button that will work in ongoing circle of done/undone
}

public isDone = false;

}


