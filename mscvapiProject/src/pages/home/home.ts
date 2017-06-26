import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import {ElementRef, ViewChild} from '@angular/core';

    // need to define paper outside of class, not sure why
    declare var paper: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    paperObj; //: any;
//    @ViewChild('myCanvas') myCanvas: ElementRef;
    path: any;
    //    paper: any;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.paperObj = new paper.PaperScope();
    this.paperObj.install(window);
    this.paperObj.setup('myCanvas');
  //  this.paperObj.setup(this.myCanvas.nativeElement);
//      this.paperObj.setup('myCanvas');  
//    console.log('version:', this.paperObj.version);
//    console.log('paper obj:', this.paperObj);
  // Create a Paper.js Path to draw a line into it:
  //  var path = new this.paper.Path();
  //  this.path = this.paperObj.Path()
  // Give the stroke a color
  //  path.strokeColor = 'black';
  //  var start = new this.paper.Point(100, 100);
  // Move to start and draw a line from there
  //  path.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  //  path.lineTo(start.add([ 200, -50 ]));
  // Draw the view now:
  //  this.paper.view.draw();
  }

  mouseDown(){
    console.log('mouse down');
  }
  mouseMove(){
    console.log('mouse move');
  }
  mouseUp(){
    console.log('mouse up');
  }
  
}
