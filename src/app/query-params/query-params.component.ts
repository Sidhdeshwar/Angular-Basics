import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent {

  myvar :any ;
  constructor(private activetedRoute:ActivatedRoute)
  {
      this.activetedRoute.queryParams.subscribe(data=>{
        console.log(data);
        this.myvar = data;
      })
  }
}
