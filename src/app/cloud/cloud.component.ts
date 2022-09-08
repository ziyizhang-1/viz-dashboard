import {
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Subscription } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/core/store/reducers";
import { getThemeType } from "src/app/core/store/reducers/theme.reducer";

@Component({
  selector: "app-cloud",
  templateUrl: "./cloud.component.html",
  styleUrls: ["./cloud.component.scss"],
})
export class CloudComponent implements OnInit, OnDestroy {
  theme: string;
  private themeSubscription: Subscription;
  constructor(private store: Store<AppState>) {}
  public show: boolean = false;

  ngOnInit(): void {
    this.themeSubscription = this.store
      .pipe(select(getThemeType))
      .subscribe((theme: string) => {
        this.theme = theme === "Dark" ? "dark" : "light";
      });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}