import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  enviarauxiliar(){


    localStorage.setItem("categoria", "Auxiliar")

    this.router.navigate(['admin/page']);




  }


  enviarasociado(){


    localStorage.setItem("categoria", "Asociado")

    this.router.navigate(['admin/page']);




  }


  enviarprincipal(){


    localStorage.setItem("categoria", "Principal")

    this.router.navigate(['admin/page']);




  }
}
