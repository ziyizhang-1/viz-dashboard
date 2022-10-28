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
import { ModalModule } from "src/app/layout/components/modal/modal.module";
import { SutopListComponent } from "./sutop-list.component";



@NgModule({
  bootstrap: [SutopListComponent],
  declarations: [
	SutopListComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	ModalModule
  ],
  exports: [SutopListComponent]
})
export class SutopListModule {}