import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { EmailConfigComponent } from "./components/email-config/email-config.component";
import { InspectorComponent } from "./components/inspector/inspector.component";
import { SmtpConfigComponent } from "./components/smtp-config/smtp-config.component";
import { EmailConfigService } from "./services/email-config.service";

@NgModule({
  declarations: [
    AppComponent,
    EmailConfigComponent,
    InspectorComponent,
    SmtpConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmailConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    // console.log("Routes: ", JSON.stringify(router.config, null, 8));
  }
}
