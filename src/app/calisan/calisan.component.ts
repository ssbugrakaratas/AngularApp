import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Calisan } from '../shared/calisan.model';

import { CalisanService } from "../shared/calisan.service";

declare var M: any;
@Component({
  selector: 'app-calisan',
  templateUrl: './calisan.component.html',
  styleUrls: ['./calisan.component.css'],
  providers: [CalisanService]
})
export class CalisanComponent implements OnInit {

  constructor(public calisanServis: CalisanService) { }

  ngOnInit() {
    this.resetForm();
    this.getirCalisan();
  }



  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getirCalisan();
    }
    this.calisanServis.seciliCalisan = {
      _id: "",
      isim: "",
      pozisyon: "",
      ofis: "",
      maas: null
    }
    this.getirCalisan();
  }

  onSubmit(form: NgForm) {
    //if durumu => id yok ekleme yap
    if (!form.value._id) {
      this.calisanServis.postCalisan(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Kaydetme İşlemi Başarılı', classes: 'rounded' });
        this.getirCalisan();
      });
    }
    //else durumu => id var güncelleme yap
    else {
      this.calisanServis.putCalisan(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Güncelleme İşlemi Başarılı', classes: 'rounded' });
        this.getirCalisan();
      });
    }

  }


  getirCalisan() {
    this.calisanServis.getCalisanlar().subscribe((res) => {
      this.calisanServis.calisanlar = res as Calisan[];
    });
  }

  guncelleCalisan(guncellenecek_calisan: Calisan) {
    this.calisanServis.seciliCalisan = guncellenecek_calisan;
  }

  silCalisan(_id: string, form: NgForm) {
    if (confirm("Silmek istediğine emin misin ?\nİstersen bir daha düşün...") == true) {
      this.calisanServis.deleteCalisan(_id).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: "Silme İşlemi Başarılı", classes: 'rounded' });
        this.getirCalisan();
      });
    }
  }

}
