import { Component, OnInit } from '@angular/core';
import {MenuItems} from './menu-items';
import {MenuItem} from './menu-item';

@Component({
  selector: 'bk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private _menuItems: MenuItems = new MenuItems();
  public get items(): MenuItem[]{
    return this._menuItems.items;
  }
  constructor() { }

  ngOnInit() {
  }

}
