import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ellipsis',
  templateUrl: './ellipsis.component.html',
  styleUrls: ['./ellipsis.component.css']
})
export class EllipsisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('teste')
  }

}
