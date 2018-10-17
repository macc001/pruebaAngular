import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductoInterface } from "../interfaces/app-producto.interface";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  cargando = true;
  producto: ProductoInterface[] = [];
  productoFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get("https://angular-html-1e0f1.firebaseio.com/productos_idx.json")
        .subscribe((resp: ProductoInterface[]) => {
          this.producto = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  public getProd(id: string) {
    return this.http.get(
      `https://angular-html-1e0f1.firebaseio.com/productos/${id}.json`
    );
  }
  buscarProd(termini: string) {
    if (this.producto.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProduct(termini);
      });
    } else {
      this.filtrarProduct(termini);
    }
  }
  private filtrarProduct(termino: string) {
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.producto.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
