import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms'

interface Food {
  id: number;
  name: string;
  age: number;
}
@Component({
  selector: 'app-filter-task',
  standalone: true,
  imports: [MatTableModule, MatSortModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './filter-task.component.html',
  styleUrl: './filter-task.component.scss'
})
export class FilterTaskComponent {
  selectedStatus: any = [];
  selectedUser: any = [];
  arr: any = []
  arr_user: any = []
  arr_status: any = []
  t13: any = {}
  token13: any = {}
  arr_box3: any = []

  displayedColumns: string[] = ['id', 'headline', 'title', 'deadline', 'priority', 'status', 'executor'];
  dataSource = new MatTableDataSource(this.arr_box3);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  show_data(x: any) {
    this.arr_user = []
    this.arr_status = []
    this.arr_box3.map((num: any, index: any) => {
      if (num.executor === x || num.status === x || num.deadline === x) {
        this.arr_user.push(num)
        return this.arr_user
      }
    });
  }
  showO() {
    var l1 = localStorage.length
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      this.t13 = localStorage.getItem(key)
      this.token13 = JSON.parse(this.t13)
      this.arr_box3.push(this.token13) //SHOW DATA !!!!
      this.arr_box3.sort((a: any, b: any) => Number(a.id) - Number(b.id));
    }
  }
  ngOnInit(): void {
    this.showO()
  }
}
