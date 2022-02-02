import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CalisanService } from "../shared/calisan.service";

declare var M : any;
@Component({
  selector: 'app-calisan',
  templateUrl: './calisan.component.html',
  styleUrls: ['./calisan.component.css'],
  providers: [CalisanService]
})
export class CalisanComponent implements OnInit {

  constructor(public calisan_servis: CalisanService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  

  resetForm(form ?: NgForm){
    if(form){
      form.reset();
      this.calisan_servis.secili_calisan = {
        _id:"",
        isim:"",
        pozisyon:"",
        ofis:"",
        maas: null,
      }
    }

  }

  onSubmit(form: NgForm){
    this.calisan_servis.postCalisan(form.value).subscribe((res)=> {
      this.resetForm(form);
      M.toast({html:'Kaydetme İşlemi Başarılı', classes : 'rounded'});
    });


  }

}
