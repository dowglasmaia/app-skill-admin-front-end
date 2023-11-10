import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators"

import { environment } from 'src/environments/environment.prod';
import { Colaborador } from '../model/colaborador.model';
import { Skill } from '../../skills/model/skill.model';




@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiPath: string = `${environment.url_api}/colaboradores`;


  getAllByNameSkill(name: string): Observable<Colaborador[]> {
    console.log("O NOME É: "+name);
    return this.http.get(`${this.apiPath}?skill=${name}`)
    .pipe(
      catchError(this.handleError),
      map(this.jsonDataToColaboradores)
    )
  }


  constructor(private http: HttpClient) { }

  getAll(): Observable<Colaborador[]> {
    return this.http.get(`${this.apiPath}?skill=`)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToColaboradores)
      )
  }

  getById(id: number): Observable<Colaborador> {
    const url = `${this.apiPath}/${id}`
    return this.http.get(url)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToColaborador)
      )
  }



  update(id: number, skills : Array<Skill>): Observable<Colaborador> {
    const url = `${this.apiPath}/${id}/skills`;
    return this.http.put(url, skills)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToColaborador)
      )
  }


  private jsonDataToColaborador(jsonData: any): Colaborador {
    let json = jsonData as Colaborador;
    return json;
  }

  private jsonDataToColaboradores(jsonData: any[]): Colaborador[] {
    const colaboradores: Colaborador[] = [];
    jsonData.forEach(element => colaboradores.push(element as Colaborador))
    return colaboradores;
  }

  private handleError(error: any): Observable<any> {
    console.log("Error na requisição =>", error)
    return throwError(error)
  }

}
