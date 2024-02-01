import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges ,OnInit {
  constructor() {
    console.log('child constructor is called');
    console.log(this.data);
    console.log(this.name);
}
  @Input() data?: number = 232;
  name: string = 'sreeraj'
  @ViewChild('temp') para?: ElementRef ;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
   ngOnInit(): void {
     console.log('child ngOninit called');
console.log(this.para);
   }
  
}
