import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  nombre: string;

  email: string;
  
  darkMode: boolean = true;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }



  ngOnInit() {  
    if (JSON.parse(localStorage.getItem('usuario'))){
      var usuario = JSON.parse(localStorage.getItem('usuario'))
      this.nombre = usuario.nombre
      this.email = usuario.email

    }else{
      this.nombre = "usuario";
      this.email = "email";
    }
   /* var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre != null){
      this.nombre = usuario.nombre
    };*/
  }

  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
    if (JSON.parse(localStorage.getItem('usuario'))){
      var usuario = JSON.parse(localStorage.getItem('usuario'))
      this.nombre = usuario.nombre;
      this.email = usuario.email;

    }else{
      this.nombre = "usuario";
      this.email = "email";
    }
    
  }

}
