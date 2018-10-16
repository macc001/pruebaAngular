import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { InfoPagina } from "../interfaces/app-info.interfaces";
import { InfoEquipo } from "../interfaces/app-equipo.interfaces";

@Injectable({
  providedIn: "root"
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];

  cargar = false;

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }
  private cargarInfo() {
    this.http
      .get("assets/data/data.pagina.json")
      .subscribe((resp: InfoPagina) => {
        this.cargar = true;
        this.info = resp;
        // console.log(resp.email);
      });
  }

  private cargarEquipo() {
    this.http
      .get("https://angular-html-1e0f1.firebaseio.com/equipo.json")
      .subscribe((resp: InfoEquipo[]) => {
        this.cargar = true;
        this.equipo = resp;
        // console.log(this.equipo[1].frase);
      });
  }
}
