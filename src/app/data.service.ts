import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:  'root'
})

export class DataService{
  constructor(public httpClient: HttpClient) {
  }
  async getSearchUserData(userName: string){
    console.log("Data service called");
    return this.httpClient
      .get<Object>('https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&inname=' + userName + '&site=stackoverflow')
      .toPromise();
  }
}


/*StackExchange Api endpoint too get users*/
/*https://api.stackexchange.com/2.3/users?order=desc&sort=reutation&inname=steve&site=stackoverflow*/
