import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  cat:string;
  constructor() { }

  ngOnInit(): void {
   this.inicial();

  }


  inicial(){
    this.cat = localStorage.getItem("categoria");
  }



  registrar(){
    
  };
}
