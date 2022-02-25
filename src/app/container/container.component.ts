import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  selectedData:any;

  constructor() { 
  }

  ngOnInit(): void {
  }

  setSelectedData(data:any){
    this.selectedData = data;
  }

}
