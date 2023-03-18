import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  formdata:any;
  constructor(){

  }
  ngOnInit(): void {
   this.formdata=new FormGroup({
    name:new FormControl("",Validators.compose([Validators.required])),
    email:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
    mobileno:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]))
   });
  }

}
