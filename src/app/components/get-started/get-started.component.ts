import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  title = 'sample-ng-app';

  object = {
    title: 'My app',
    author: 'Boris'
  };

  products = [
    {
      id: 1,
      name: 'Thinkpad',
      price: 500
    },
    {
      id: 2,
      name: 'MacbookPro',
      price: 1500
    }
  ];

  btnStatus = true;

  constructor() { }

  ngOnInit() {
  }

  toggleStatus(event) {
    this.btnStatus = !this.btnStatus;
  }

}
