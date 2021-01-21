import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recordsFiltersortsai';
}

export interface EmployeeData {
  Id: string;
  EmpName: string; 
  Color: string;
  Hours: number;
}


const FAVORITE_COLORS: string[] = ['gray', 'black', 'navy', 'blue', 'teal', 'green', 'purple',
  'fuchsia', 'lime', 'olive', 'aqua', 'yellow', 'orange', 'red', 'maroon'];
const EMP_NAMES: string[] = ['Robert', 'Jing Jo', 'Thomas', 'Peter', 'Sam', 'Jack',
  'Charlie', 'Maria', 'Julia', 'Albert', 'Arthur', 'James',
  'Simran', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];




//This function will create employee data
function getEmployees(id: number): EmployeeData {
  const name =
  EMP_NAMES[Math.round(Math.random() * (EMP_NAMES.length - 1))] + ' ' +
  EMP_NAMES[Math.round(Math.random() * (EMP_NAMES.length - 1))].charAt(0) + '.';


  return {
    Id: id.toString(),
    EmpName: name,
    Color: FAVORITE_COLORS[Math.round(Math.random() * (FAVORITE_COLORS.length - 1))],
    Hours: 8
  };
}