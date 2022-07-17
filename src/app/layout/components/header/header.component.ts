import { Component, ViewChild } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { ThemeService } from "src/app/core/services/theme.service";
import {
  SetDarkTheme,
  SetLightTheme
} from "src/app/core/store/actions/theme.actions";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @ViewChild(ModalComponent, { static: true }) modal: ModalComponent;
  theme: string;

  private themeSubscription: Subscription;

  constructor(
    private store: Store<AppState>,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme;
      });
    const targetDiv = document.getElementById("alert-header");
    const knownBtn = document.getElementById("known-btn");
    const closeBtn = document.getElementById("close-btn");
    knownBtn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
    closeBtn.onclick = function () {
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
    };
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onLightTheme(): void {
    if (this.theme === "Dark") {
      this.store.dispatch(new SetLightTheme());
      this.themeService.setTheme("Light");
    }
  }
  onDarkTheme(): void {
    if (this.theme === "Light") {
      this.store.dispatch(new SetDarkTheme());
      this.themeService.setTheme("Dark");
    }
  }
}
