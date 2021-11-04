import {Component} from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Fidelity Tech Challenge';
  userName: string = '';
  public userSearchResponse: any;
  public dataService: DataService;
  public userSearchResponseItems: any;
  public selectedRow: any;
  /*Search results grid*/
  columnDefs = [
    {headerName: 'Account Id', field: 'account_id'},
    {headerName: 'User Id', field: 'user_id'},
    {headerName: 'Display Name', field: 'display_name'},
  ];
  public rowData = [];

  constructor(public httpClient: HttpClient, private modalService: NgbModal){
    this.dataService = new DataService(httpClient);
  }
  async onSearch(){
    console.log("Search Request received with Username : " + this.userName);
    this.userSearchResponse = await this.dataService.getSearchUserData(this.userName);
    this.userSearchResponseItems = this.userSearchResponse.items;
    this.rowData = this.userSearchResponseItems;
    console.log('Response from StackExchange : \n' + this.userSearchResponse);
  }
  open(content:any, event: any) {
    this.selectedRow = event.data;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
