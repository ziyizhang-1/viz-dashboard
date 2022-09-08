import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	IgxCheckboxModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { TestcaseListComponent } from "./testcase-list.component";



@NgModule({
  bootstrap: [TestcaseListComponent],
  declarations: [
	TestcaseListComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCheckboxModule,
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
  ],
  exports: [TestcaseListComponent]
})
export class TestcaseListModule {}