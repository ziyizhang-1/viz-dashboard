import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { RegistryListComponent } from "./registry-list.component";



@NgModule({
  bootstrap: [RegistryListComponent],
  declarations: [
	RegistryListComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
  ],
  exports: [RegistryListComponent]
})
export class RegistryListModule {}