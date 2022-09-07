import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";
import { NgModule } from "@angular/core";
import { HeaderModule } from "../layout/components/header/header.module";
import { ModalModule } from "../layout/components/modal/modal.module";
import { CloudComponent } from './cloud.component';
import { PlatformListModule } from "./platform-list/platform-list.module";
import { BackendListModule } from "./backend-list/backend-list.module";
import { ReleaseListModule } from "./release-list/release-list.module";
import { RegistryListModule } from "./registry-list/registry-list.module";

@NgModule({
    imports: [CommonModule,
              HeaderModule,
              ModalModule,
              ClarityModule,
              PlatformListModule,
              BackendListModule,
              ReleaseListModule,
              RegistryListModule
            ],
    declarations: [CloudComponent]
  })
  export class CloudModule {}