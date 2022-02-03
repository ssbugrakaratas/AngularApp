import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dropdown_items = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(dropdown_items, {
      coverTrigger : false
    });
  }


}
