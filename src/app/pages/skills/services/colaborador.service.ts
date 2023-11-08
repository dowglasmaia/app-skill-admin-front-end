import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators"

import { environment } from 'src/environments/environment.prod';
import { Colaborador } from '../model/colaborador.model';




@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiPath: string = `${environment.url_api}/colaboradores`;

  constructor(private http: HttpClient) { }

  getAllBySkill(idSkill: number): Observable<Colaborador[]> {
    return this.http.get(`${this.apiPath}/skill/${idSkill}`)
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



  update(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.apiPath}/${colaborador.id}/skills`;
    return this.http.put(url, colaborador)
      .pipe(
        catchError(this.handleError),
        map(() => colaborador)
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
