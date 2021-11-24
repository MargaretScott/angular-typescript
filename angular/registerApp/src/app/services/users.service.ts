import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {

    this.baseUrl = 'http://c595-88-7-197-245.ngrok.io/'
  }

  register(pForm: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'register', pForm))
  }

  login(pFormValues: any): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl + 'login', pFormValues))
  }

  getPremio(pToken: string | null): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': pToken || ""
      })
    }
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + 'premio', httpOptions))
  }
}
