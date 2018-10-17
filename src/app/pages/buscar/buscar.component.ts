import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.css"]
})
export class BuscarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public productosServices: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(paramas => {
      console.log(paramas["termino"]);
      this.productosServices.buscarProd(paramas["termino"]);
    });
  }
}
