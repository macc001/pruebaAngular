import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../services/productos.service";
import { ProdDescription } from "../../interfaces/prod-descr.interface";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  producto: ProdDescription;
  id: string;
  constructor(
    private route: ActivatedRoute,
    public prodServ: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      // console.log(parametros["id"]);
      this.prodServ
        .getProd(parametros["id"])
        .subscribe((prod: ProdDescription) => {
          console.log(prod);
          this.id = parametros["id"];
          this.producto = prod;
        });
    });
  }
}
