import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ForceSheet } from '../models/forcesheet';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private sheetSubject: BehaviorSubject<ForceSheet>;
  public sheet: Observable<ForceSheet>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.sheetSubject = new BehaviorSubject<ForceSheet>(JSON.parse(localStorage.getItem('sheet')));
    this.sheet = this.sheetSubject.asObservable();
  }

  public get sheetValue(): ForceSheet{
    return this.sheetSubject.value;
  }

  public getUserSheet(name: string) {
    return this.http.get<ForceSheet>(`${environment.sheetCrud}/user-force-character-sheet?playerName=${name}`)
    .pipe(map(sheet =>{
      localStorage.setItem('sheet', JSON.stringify(sheet));
      this.sheetSubject.next(sheet);
      return sheet;
    }));
  }
}
