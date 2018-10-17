import { Component, OnInit } from "@angular/core";
import { Employee } from "../../interfaces/formulario";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  EmployeeArray: Employee[] = [];

  constructor() {}

  ngOnInit() {}
}
