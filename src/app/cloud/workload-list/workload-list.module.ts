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
import { WorkloadListComponent } from "./workload-list.component";



@NgModule({
  bootstrap: [WorkloadListComponent],
  declarations: [
	WorkloadListComponent
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
  exports: [WorkloadListComponent]
})
export class WorkloadListModule {}