import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../layout/components/header/header.module";
import { ModalModule } from "../layout/components/modal/modal.module";
import { CloudComponent } from './cloud.component';

@NgModule({
    imports: [CommonModule, HeaderModule, ModalModule],
    declarations: [CloudComponent]
  })
  export class CloudModule {}