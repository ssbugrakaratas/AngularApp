import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable , of } from 'rxjs';
import { map } from 'rxjs/operators';

import {Calisan} from './calisan.model'

@Injectable({
  providedIn: 'root'
})
export class CalisanService {
  secili_calisan:Calisan;
  calisanlar : Calisan[];

  constructor() { }
}
