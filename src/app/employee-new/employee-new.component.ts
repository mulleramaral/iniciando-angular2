import { Component, OnInit } from '@angular/core';
import employees from '../IEmployee';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employes = employees;
  name = 'Muller caetano do amaral';
  salario = 0;

  constructor() { }

  ngOnInit() {
  }

  adicionarEmployee() {
    this.employes.push({name: this.name, salario: this.salario});
    console.log(this.employes);
  }
}
