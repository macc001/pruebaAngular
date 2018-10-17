import { RouterModule, Routes } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { FormularioComponent } from "./pages/formulario/formulario.component";

const appRoutes: Routes = [
  { path: "home", component: PortafolioComponent },
  { path: "about", component: AboutComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "buscar/:termino", component: BuscarComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
