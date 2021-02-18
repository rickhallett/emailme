import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SmtpServerConfig } from "../components/email-config/email-config.component";

import * as ApiConfigService from "../../../server/api/services/ConfigService";

@Injectable()
export class EmailConfigService {
  constructor(private http: HttpClient) {}

  // CODE REVIEW: is it better to keep the api call within angulars domain, or pass it off to the
  // sails instance? Doing it this way allows for stronger typing.

  // The function was made generic so that the recieving function had access to type information
  getSmtpConfigs<T>() {
    return this.http.get<T>("http://localhost:3000/smtpconfigs");
  }

  saveSmtpConfig<T>(config: SmtpServerConfig) {
    return this.http.post<T>("http://localhost:3000/smtpconfigs", config);
    // TODO: method needs to call DB persistance layer. At the moment this uses json-server
  }
}
