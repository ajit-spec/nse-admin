import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {UsersDataServiceService} from '../../services/users-data-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {RejectedClient} from '../../models/user.model';
import {MatSort} from '@angular/material/sort';
import {Animations} from '../../animations';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  animations: [
    Animations.fadeIn
  ],
  encapsulation: ViewEncapsulation.None
})

export class Comp2Component implements OnInit, AfterViewInit {

  userService: UsersDataServiceService;
  displayedColumns: string[] = ['name', 'email', 'category', 'organization',
    'cmdatatype', 'fodatatype', 'greeksdatatype', 'reasonforrejection' , 'rejectedby' , 'actions'];
  dataSource: MatTableDataSource<RejectedClient>;

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
      this.dataSource = new MatTableDataSource<RejectedClient>(this.userService.getrejectedclients());
    }

  }

}
