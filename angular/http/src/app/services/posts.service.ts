import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  /*
    * Get All post
    */
  getAll(): Promise<Post[]> {
    //existe dos funciones que son lastValueFrom y firstValueFrom
    return lastValueFrom(this.httpClient.get<Post[]>(this.baseUrl));
  }

  /* getAll(): Observable<Post[]> {
      return this.httpClient.get<Post[]>(this.baseUrl)
    } */

  /*
  * Get post
  */
  getById(pId: number): Promise<Post> {
    return lastValueFrom(this.httpClient.get<Post>(`${this.baseUrl}/${pId}`));
    //return lastValueFrom(this.httpClient.get<Post>(this.baseUrl + "/" + pId));
  }

  /*
  * Delete post
  */
  deleteById(pId: number | undefined): Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(this.baseUrl + "/" + pId))
  }

  /**
   * Create post
   */
  create(pForm: any): Promise<Post> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json; charset=UTF-8'
        })
    }
    return lastValueFrom(this.httpClient.post<Post>(this.baseUrl, pForm, httpOptions))
  }

  /**
   * Update post
   */
  update(pPost: Post): Promise<Post> {
    let id = pPost.id;

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-type': 'application/json; charset=UTF-8'
        })
    }

    return lastValueFrom(this.httpClient.put<Post>(this.baseUrl + "/" + id, pPost, httpOptions))
  }

}
