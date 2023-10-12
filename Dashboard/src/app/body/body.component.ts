import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {


  /*When we are using this component as html tag, we can enter some attribute input*/
  /*And after that we are doing some responsive things in style codes*/
  @Input() collapsed = false;
  @Input() screenWidth = 0;


  getBodyClass():string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';/*If our screen width smaller than 768 px we should do some responsive things*/
    }
    return styleClass;
  }

}
