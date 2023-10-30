import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators"
import { Skill } from "../model/Skill";


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiPath: string = "api/skills";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Skill[]> {
    return this.http.get(this.apiPath)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToSkills)
      )
  }

  getById(id: number): Observable<Skill> {
    const url = `${this.apiPath}/${id}`
    return this.http.get(url)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToSkill)
      )
  }

  create(skill: Skill): Observable<Skill> {
    return this.http.post(this.apiPath, skill)
      .pipe(
        catchError(this.handleError),
        map(this.jsonDataToSkill)
      )
  }

  update(skill: Skill): Observable<Skill> {
    const url = `${this.apiPath}/${skill.id}`;
    return this.http.put(url, skill)
      .pipe(
        catchError(this.handleError),
        map(() => skill)
      )
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError),
        map(() => null)
      )
  }


  private jsonDataToSkill(jsonData: any): Skill {
    return jsonData as Skill;
  }

  private jsonDataToSkills(jsonData: any[]): Skill[] {
    const skills: Skill[] = [];
    jsonData.forEach(element => skills.push(element as Skill))
    return skills;
  }

  private handleError(error: any): Observable<any> {
    console.log("Error na requisição =>", error)
    return throwError(error)
  }

}
