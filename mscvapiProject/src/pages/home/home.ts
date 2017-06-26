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
    paperObj; //: any;
    myTool;
    path: any;
    drag: any;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.paperObj = new paper.PaperScope();
    this.paperObj.install(window);
    this.paperObj.setup('myCanvas');
  }

  
  mouseDown(event){
    var myTool = new this.paperObj.Tool();
    myTool.activate();
    myTool.onMouseDown = function(event) {
        console.log('x:', event.point.x, 'y:', event.point.y);
    }     
    myTool.onMouseDrag = function(event) {
        console.log('x:', event.point.x, 'y:', event.point.y);
    }     
    this.drag = true;
  }

  //  mouseMove(){
  //    if(this.drag){
  //        console.log('mouse move');
  //    }
  //  }
  mouseUp(){
    console.log('mouse up');
    this.drag = false;
  }
  
}
