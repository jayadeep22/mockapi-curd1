import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:any;

  constructor(private api:ApicallService){

  }
  ngOnInit(): void {
    this.list();
  }

  list(){
    this.api.get("https://63fd995519f41bb9f64f6c11.mockapi.io/api/v1/users").subscribe((result:any)=>{
      this.users=result;
     });
  }

 delete(id:any){
  if(confirm("sure to delete")){
    this.api.delete("https://63fd995519f41bb9f64f6c11.mockapi.io/api/v1/users/"+ id).subscribe((result:any)=>{
    alert("deleted")
    this.list();
    });
  }

 }
}
