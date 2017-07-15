import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import paper from 'paper/dist/paper-full';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

    var rectPath;
    var from = new paperObj.Point(paperObj.point);
    var to = new paperObj.Point(paperObj.point);

    myTool.onMouseDown = function(event) {
        from = event.point;
        to = event.point;
        rectPath = new paperObj.Path.Rectangle(from, to);
        rectPath.strokeColor = 'black';
        console.log('rectPathClick:', rectPath);
    }     
    
    myTool.onMouseDrag = function(event) {
        rectPath.removeSegments();
        rectPath = paperObj.Path.Rectangle(from, event.point);
        rectPath.strokeColor = 'blue';
    }       
  }
}
