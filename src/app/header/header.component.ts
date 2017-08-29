import { Component, OnInit } from '@angular/core';

import { MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  title: string = "WMMT5 DX+";

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    console.log("Menu Clicked!");
  }

  onSettingsClick() {
    console.log("Settings Clicked!");
  }
}
