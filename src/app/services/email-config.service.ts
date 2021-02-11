import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SmtpServerConfig } from "../components/email-config/email-config.component";

@Injectable()
export class EmailConfigService {
  constructor(private http: HttpClient) {}

  getSmtpConfigs<T>() {
    return this.http.get<T[]>("http://localhost:3000/smtpconfigs");
  }
}
