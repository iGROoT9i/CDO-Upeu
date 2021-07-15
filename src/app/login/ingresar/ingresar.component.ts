import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {


  }


  

  email1:boolean=false;


 


entrar(){
  


  let user: Usuario[] = JSON.parse(localStorage.getItem("usuarios"));


  //for (let i = 0; i < user.length + 1; i++) {
    
  //}

  user.forEach(element => {
    
    if(element.email == this.email ){
     
      if(element.password ==this.password){
        localStorage.setItem("usuario", element.name);
  
    this.router.navigate(['/admin/perfil']);
       
      }else{
        this.email1=true;
      }
  
     
    }else{
      this.email1=true;
    }

   
    
   
  });

  
  

}
  
}
