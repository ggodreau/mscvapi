import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import paper from 'paper/dist/paper-full';

//import {ElementRef, ViewChild} from '@angular/core';

    // need to define paper outside of class, not sure why
    //    declare var paper;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//paperObj; //: any;
  //  myTool;
  //path: any;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.initPaper();
  }

  initPaper(){
    var paperObj = new paper.PaperScope();
    paperObj.install(window);
    paperObj.setup('myCanvas');

    var myTool = new paperObj.Tool();
    myTool.activate();

    //mouseDown(event){
    //  var myPath = new this.paperObj.Path()
    //  myPath.strokeColor = 'black';
    //  console.log(myPath);
      
    myTool.onMouseDown = function(event) {
          console.log('paperObj in nested:', paperObj);
    }     
      //this.myTool.onMouseDrag = function(event) {
      //    var x = event.point.x;
      //    var y = event.point.y;
      //    console.log('x,y:', x, y);
      //}
     //}       
  }
}
