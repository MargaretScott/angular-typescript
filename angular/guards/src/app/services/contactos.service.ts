import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://reqres.in/api/users/'
  }

  async getAll(): Promise<Contacto[]> {
    const response = await lastValueFrom(this.httpClient.get<any>(this.baseUrl))
    return response.data
  }

  async getById(pId: number): Promise<Contacto> {
    const response = await lastValueFrom(this.httpClient.get<any>(this.baseUrl + pId))
    return response.data
  }
}
