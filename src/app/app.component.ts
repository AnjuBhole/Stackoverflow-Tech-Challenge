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
  userSearchResponse: any;
  dataService: DataService;
  userSearchResponseItems: any = [];
  selectedRow: any;
  isOnLoad = true;
  /*Search results grid*/
  columnDefs = [
    {headerName: 'User Name', field: 'display_name'},
    {headerName: 'Account Id', field: 'account_id'},
    {headerName: 'User Id', field: 'user_id'},
  ];

  constructor(public httpClient: HttpClient, private modalService: NgbModal){
    this.dataService = new DataService(httpClient);
  }
  async onSearch(){
    console.log("Search Request received with Username : " + this.userName);
    /*RegExp to validate the special characters and return request*/
    const regexp = new RegExp("^[A-Za-z0-9 ]*$");
    if (!regexp.test(this.userName)){
      this.userSearchResponseItems = [];
      this.isOnLoad = false;
      return;
    }
    this.userSearchResponse = await this.dataService.getSearchUserData(this.userName);
    this.userSearchResponseItems = this.userSearchResponse.items;
    console.log('Response received from StackExchange API');
    this.isOnLoad = false;
  }
  open(content:any, event: any) {
    this.selectedRow = event.data;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
