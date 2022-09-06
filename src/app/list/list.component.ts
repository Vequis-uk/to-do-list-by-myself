import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public listItemValue: string = '';
  public newListItem: string[] = [];  

  constructor() {}

  ngOnInit(): void {}

  saveListItem() {
    this.newListItem.push(this.listItemValue);
    this.listItemValue = '';
  }

  deleteListItem(index: number) {
    this.newListItem.splice(index, 1);
  }

}
