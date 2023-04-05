import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  myVar :any ;
  constructor(private activeRoute:ActivatedRoute)
  {
    activeRoute.params.subscribe(data=>{
          this.myVar = data;
    })
  }

}
