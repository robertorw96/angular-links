import { Component } from '@angular/core';
import {Link} from './link/link.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  links: Link[];
  constructor(){
    this.links= [
      new Link('Angular', 'https://angular.io',100),
      new Link('React', 'https://reactjs.org/',200),
      new Link('Vue', 'https://vuejs.org/',50)
    ]
    console.log(this.links);
  }
  addLink(title: HTMLInputElement, link: HTMLInputElement) {
    this.links.push(new Link(title.value,link.value));
    title.value='';
    link.value='';
    return false;
  }
}
