import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navbarData} from "./nav-data";
import {ActivatedRoute, Router} from "@angular/router";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";



//TODO neden interface tanımladık öğren
interface SideNavToggle{
  /*We are defining an interface to output an object pattern, this object has two different field and with these fields*/
  /*we are preparing some */
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],

  /*There is some animations for components*/
  animations: [
    /*This is for sidenav texts*/
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate('550ms',
          style({opacity:1})
        )
      ]),
      transition(':leave', [
        style({opacity:1}),
        animate('200ms',
          style({opacity:0})
        )
      ])
    ]),

    /*This is for sidenav close button*/
    trigger('rotate',[
      transition(':enter', [
        animate('600ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: 0}),
            style({transform: 'rotate(1turn)', offset: 1}),
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  constructor() {
  }


  //TODO comment start
  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
    }
    /*Still i don't know what the fuck is this func does*/
  }


  /*This code block outputs an interface pattern for use in other components*/
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  //TODO comment end

  /*We are checking for sidenav collapse*/
  collapsed = false;

  /*For responsive design we should know the screen size*/
  screenWidth = 0;


  /*Navbar items*/
  navList = navbarData;





  /*When there is someone clicked on sidenav, we say sidenav is "collapsed"*/
  toggleCollapsed():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }

  /*Navbar closing method*/
  closeSidenav():void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }
}
