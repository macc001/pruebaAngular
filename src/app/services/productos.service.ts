import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductoInterface } from "../interfaces/app-producto.interface";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true;
  producto: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http
      .get("https://angular-html-1e0f1.firebaseio.com/productos_idx.json")
      .subscribe((resp: ProductoInterface[]) => {
        this.producto = resp;
        this.cargando = false;
      });
  }
}
