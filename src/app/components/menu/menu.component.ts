import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService, MenuData } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menuData:MenuData[] = [];
  @Output() selectedItem: EventEmitter<any>;
  selectedData:any;
  selectedMenuItem :any;

  constructor(private dataService:DataService) { 
    this.selectedItem = new EventEmitter();
  }

  ngOnInit(): void {
    this.menuData = this.dataService.getData();
  }

  onClick(data:any){
    this.selectedMenuItem = data; 
    this.selectedItem.emit(data);
  }

  isActiveMenuItem(item:any) {
    return this.selectedMenuItem === item;
  }

  selectMenuItem(item:any) {
    this.selectedMenuItem = item; 
};

}
