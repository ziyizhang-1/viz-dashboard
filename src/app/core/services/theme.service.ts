import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class ThemeService {
  linkRef: HTMLLinkElement;

  lightTheme: Record<string, string> = {
    name: "Light",
    href: "assets/themes/clarity-ui.min.css"
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(themeName: string) {
    const headElement: HTMLHeadElement = this.document.querySelector("head");

    if (this.lightTheme.name === themeName) {
      this.linkRef = this.document.createElement("link");
      this.linkRef.rel = "stylesheet";
      this.linkRef.href = this.lightTheme.href;
      headElement.appendChild(this.linkRef);
    } else {
      let link = headElement.querySelectorAll(
        `link[href='${this.lightTheme.href}']`
      )[0];
      link.parentNode.removeChild(link);
    }
  }
}
