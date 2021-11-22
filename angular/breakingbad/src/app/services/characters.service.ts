import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://www.breakingbadapi.com/api/characters/';
  }

  getAll(): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl));
  }

  getById(pId: number): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl + pId));
  }

  getByName(pName: string): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl + '?name=' + pName))
  }

  getByCategory(pCategory: string): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl + '?category=' + pCategory))
  }

  async getAllCategories(): Promise<string[]> {
    let arrCharacters = await this.getAll();
    let categoriesInArr: string[] = arrCharacters.map(character => character.category);
    categoriesInArr = [...new Set(categoriesInArr)];
    //por la api tiene un elemento doble "Breaking Bad, Better Call Saul" debo eliminar esta opcion de la posicion 1.
    categoriesInArr.splice(1, 1);
    return categoriesInArr;
    //acordaros new Set elimina elementos duplicados del array.
  }

  getByPage(pPage: number = 1): Promise<Character[]> {
    return lastValueFrom(this.httpClient.get<Character[]>(this.baseUrl + '?limit=10&offset=' + (pPage - 1) * 10));
  }

}
