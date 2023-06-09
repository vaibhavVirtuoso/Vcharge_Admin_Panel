import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() collapsed = false;
    @Input() screenWidth = 0;

    getHeadClass():string {
      let styleClass = '';
      if(this.collapsed && this.screenWidth > 768){
        styleClass = 'head-trimmed';
      }else{
        styleClass = 'head-md-screen'
      }
      return styleClass; 
    }
}
