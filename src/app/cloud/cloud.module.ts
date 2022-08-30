import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../layout/components/header/header.module";
import { ModalModule } from "../layout/components/modal/modal.module";
import { CloudComponent } from './cloud.component';
import { DropDownListModule } from "./dropdown-list/dropdown-list.module";

@NgModule({
    imports: [CommonModule, HeaderModule, ModalModule, DropDownListModule],
    declarations: [CloudComponent]
  })
  export class CloudModule {}