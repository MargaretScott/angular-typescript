import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //endpoint de entrada al servidor para poder hacer las consultas
  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getAll(): Promise<Post[]> {
    //existe dos funciones que son lastValueFrom y firstValueFrom
    return lastValueFrom(this.httpClient.get<Post[]>(this.baseUrl));
  }

  /* getAll(): Observable<Post[]> {
      return this.httpClient.get<Post[]>(this.baseUrl)
    } */

}
