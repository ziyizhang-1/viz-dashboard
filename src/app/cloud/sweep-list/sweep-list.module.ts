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
import { SweepListComponent } from "./sweep-list.component";
import { ModalModule } from "src/app/layout/components/modal/modal.module";



@NgModule({
  bootstrap: [SweepListComponent],
  declarations: [
	SweepListComponent
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
  exports: [SweepListComponent]
})
export class SweepListModule {}