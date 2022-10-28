import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { CloudComponent } from "./cloud/cloud.component";

export const appRoutes: Routes = [
  { path: "dashboard", component: LayoutComponent },
  { path: "cloud", component: CloudComponent },
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];
