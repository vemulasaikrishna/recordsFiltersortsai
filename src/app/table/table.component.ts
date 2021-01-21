import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor() {
    this.emplist = Array.from({ length: 100 }, (_, k) => getEmployees(k + 1));  
      // Assign the data to the data source
      this.dataSource = new MatTableDataSource(this.emplist);
   }
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['Id', 'EmpName', 'Color', 'Hours'];
  dataSource: MatTableDataSource<EmployeeData>;
    emplist: any;
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();


      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
