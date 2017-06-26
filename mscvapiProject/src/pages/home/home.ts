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

    var myPath = new this.paperObj.Path()
    myPath.strokeColor = 'black';
    console.log(myPath);
    
    // user 'this.paperObj' instead of 'paper'
    //    var from = new this.paperObj.Point(20, 20);
    //var to = new this.paperObj.Point(40, 40);
    var rectPath = new this.paperObj.Path.Rectangle({
        point: [20, 20],
        size: [80, 80],
        strokeColor: 'black'
    });

    myTool.onMouseDown = function(event) {
        //from.set(event.point.x, event.point.y);
        //from.set(event.point.x, event.point.y);
        //to.set(event.point.x, event.point.y);
        //console.log('x:', event.point.x, 'y:', event.point.y);
        console.log('mouseDown');
    }     
    myTool.onMouseDrag = function(event) {
        //to.set(event.point.x, event.point.y); 
        //console.log('x:', event.point.x, 'y:', event.point.y);
        myPath.add(event.point);
    }     
    myTool.onMouseUp = function(event) {
        //rectPath = this.paperObj.Path.Rectangle(from, to);
        rectPath.set({
            strokeColor: 'red',
            strokeWidth: 10
        });
        console.log('mouseUp', 'rectPath: ', rectPath);
    }
    this.drag = true;
  }

  //  mouseMove(){
  //    if(this.drag){
  //        console.log('mouse move');
  //    }
  //  }
  //  mouseUp(){
  //    console.log('mouse up');
  //    this.drag = false;
  //  }
  
}
