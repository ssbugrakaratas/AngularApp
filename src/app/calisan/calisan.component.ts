import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Calisan } from '../shared/calisan.model';

import { CalisanService } from "../shared/calisan.service";

declare var M : any;
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

  

  resetForm(form ?: NgForm){
    if(form){
      form.reset();
    }
    this.calisanServis.seciliCalisan = {
      _id:"",
      isim:"",
      pozisyon:"",
      ofis:"",
      maas: null
    }
  }

  onSubmit(form: NgForm){
    this.calisanServis.postCalisan(form.value).subscribe((res)=> {
      this.resetForm(form);
      M.toast({html:'Kaydetme İşlemi Başarılı', classes : 'rounded'});
      this.getirCalisan();
    });
  }


  getirCalisan(){
    this.calisanServis.getCalisanlar().subscribe((res) =>{
      this.calisanServis.calisanlar = res as Calisan[];
    });
  }

}
