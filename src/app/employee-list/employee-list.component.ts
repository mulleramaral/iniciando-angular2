import { Component, OnInit } from '@angular/core';
import employees from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employes = employees;

  constructor() { }

  ngOnInit() {
  }

}
