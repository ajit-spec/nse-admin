import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UsersDataServiceService} from '../../services/users-data-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DisabledClient} from '../../models/user.model';
import {Animations} from '../../animations';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
  animations: [
    Animations.fadeIn
  ],
  encapsulation: ViewEncapsulation.None
})
export class Comp3Component implements OnInit, AfterViewInit {

  userService: UsersDataServiceService;
  displayedColumns: string[] = ['name', 'email', 'category', 'organization',
    'marketsegment', 'reasonforrejection' , 'rejectedby' , 'actions'];
  dataSource: MatTableDataSource<DisabledClient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(param1: UsersDataServiceService) {
    this.userService = param1;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  ngOnInit(): void {

    if (this.userService.getrejectedclients().length > 0) {
      this.dataSource = new MatTableDataSource<DisabledClient>(this.userService.getdisabledclients());
    }

  }

}
