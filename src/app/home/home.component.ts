import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,DoCheck{

  constructor() {
    console.log('Parent constructor is called');
  }
  parent: number = 0
  
  buttonClick() {
    this.parent++;
  }
ngOnInit(): void {
  console.log('parent ngOninit is called');
}
  
  ngDoCheck(): void {
    console.log('parent do check is called');
  }
}
