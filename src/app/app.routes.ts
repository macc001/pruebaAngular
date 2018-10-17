import { RouterModule, Routes } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";

const appRoutes: Routes = [
  { path: "home", component: PortafolioComponent },
  { path: "about", component: AboutComponent },
  { path: "item/:id", component: ItemComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });
