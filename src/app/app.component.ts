import { Component } from '@angular/core';
import { MyClass } from './my-class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
products: string|any[];
lerning: string|any[];
  constructor(public router:Router) {
    this.playerArray = JSON.parse(localStorage.getItem('player'));
  }

  title = 'Player ToDo';

  myOb = new MyClass(0, '', 0);
  val = 3;
  Num = 3;
  ColorName = 'red';
  CSS_Var = 'applyCSS1';
  returnBoolean = 100;
  myName123:"Siddheshwar Vyavahare";
  hrefVal = "http://google.com"
  pipeVar:any;
  showPipe:any;
  myDate = "03/29/1997";

  functions()
  {
     window.alert("Event Worked")
  }
  pipeFun()
  {
    this.showPipe = this.pipeVar;
  }

  fullName ={
    name:"Siddhesh...",
    surName: "Vyavahare",
    city : "Karkamb"
  }
  propertyBindingVar :any;

  makeRouting()
  {
     this.router.navigateByUrl('task/100/siddhesh../68');
  }

  myShopping()
  {
    this.router.navigateByUrl('shopp');
  }
  queryParams()
  {
    this.router.navigateByUrl('queryParams?nation=india&State=Maharastra&pin=413302');
  }





  // ! Cricket Project
  playerObj = {
    PlayerName: '',
    categery: '',
    matches: '',
    runs: '',
  };

  playerArray: any[] = [];

  savePlayer() {
    if (
      this.playerObj.PlayerName == '' ||
      this.playerObj.categery == '' ||
      this.playerObj.matches == '' ||
      this.playerObj.runs == ''
    ) {
      window.alert('Please, Fill All Player Details');
    } else {
      this.playerArray = JSON.parse(localStorage.getItem('player'));
      this.myOb.name = this.playerObj.PlayerName;
      this.myOb.id = 10;
      this.myOb.marks = `${this.playerObj.matches}`;

      for (let i = 0; i < this.playerArray.length; i++) {
        if (
          this.playerArray[i].PlayerName.toLowerCase() ==
          this.playerObj.PlayerName.toLowerCase()
        ) {
          window.alert(this.playerObj.PlayerName + ' Already Exist .');
          return;
        }
      }

      this.playerArray.push(this.playerObj);
      localStorage.setItem('player', JSON.stringify(this.playerArray));
      this.playerArray = JSON.parse(localStorage.getItem('player'));

      this.playerObj.PlayerName = '';
      this.playerObj.categery = '';
      this.playerObj.matches = '';
      this.playerObj.runs = '';
    }
    this.updateButton();
  }

  editPlayer(num) {
    this.index = num;
    for (let i = 0; i < this.playerArray.length; i++) {
      if (i == num) {
        this.playerObj.PlayerName = this.playerArray[i].PlayerName;
        this.playerObj.categery = this.playerArray[i].categery;
        this.playerObj.matches = this.playerArray[i].matches;
        this.playerObj.runs = this.playerArray[i].runs;
      }
    }
  }

  deletePlayer(num) {
    for (let i = 0; i < this.playerArray.length; i++) {
      if (i == num) {
        for (let j = 0; j < this.playerArray.length - 1; j++) {
          this.playerArray[i] = this.playerArray[i + 1];
        }
        this.playerArray.pop();
        localStorage.setItem('player', JSON.stringify(this.playerArray));
      }
    }
  }

  index = -1;
  updateButton() {
    for (let i = 0; i < this.playerArray.length; i++) {
      if (i == this.index) {
        this.playerArray[i] = this.playerObj;
        localStorage.setItem('player', JSON.stringify(this.playerArray));
      }
    }

    //  this.playerObj.PlayerName = "";
    //  this.playerObj.categery = "";
    //  this.playerObj.matches = "";
    //  this.playerObj.runs = "";
  }
}
