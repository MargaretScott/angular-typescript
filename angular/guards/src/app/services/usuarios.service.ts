import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "https://reqres.in/api/login"
  }

  login(pData: Usuario): Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, pData));
  }
}

