import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CalisanService } from "../shared/calisan.service";

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
  }

}
