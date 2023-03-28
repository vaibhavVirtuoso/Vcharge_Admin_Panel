import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData } from './helper';
import { navbarData } from './nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)',offset: '0'}),
          style({transform: 'rotate(2turn)',offset: '1'})
        ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean =false;

  //@HostListener

  constructor(private router:Router) {}

  ngOnInit():void{
    this.screenWidth = window.innerWidth; // to shift the inner body of sidebar 
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth})
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth: this.screenWidth})
  }

  handleClick(item: INavbarData):void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData):string{
    return this.router.url.includes(data.routeLink)? 'active' : '';
  }
}
