import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Calisan } from './calisan.model'

@Injectable({
  providedIn: 'root'
})
export class CalisanService {
  seciliCalisan: Calisan;
  calisanlar: Calisan[];
  readonly db_URL = 'http://localhost:3000/calisanlar'

  constructor(public http: HttpClient) { }


  postCalisan(eklenecek_calisan: Calisan) {
    return this.http.post(`${this.db_URL}/ekle`, eklenecek_calisan);
  }

  getCalisanlar() {
    return this.http.get(`${this.db_URL}/listele`);
  }

  putCalisan(guncellenecek_calisan: Calisan) {
    return this.http.put(`${this.db_URL}/${guncellenecek_calisan._id}`, guncellenecek_calisan);
  }

  deleteCalisan(_id: string) {
    return this.http.delete(`${this.db_URL}/${_id}`);
  }

}
