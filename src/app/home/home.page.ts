import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = []; /*[
    {
      titulo: "Bob Esponja al rescate",
      anio: 2020,
      director:"Tim Hill",
      imagen:"https://as01.epimg.net/meristation/imagenes/2019/10/25/noticias/1572002941_916672_1572003064_noticia_normal.jpg"
    },
    {
      titulo: "Batman: Death in the Family",
      anio: 2020,
      director:"Brandon Vietti",
      imagen:"https://www.dccomics.com/sites/default/files/DeathFamily_marquee_5f8101ee87bee8.17833087.jpg"
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }
}
