import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-email-config",
  templateUrl: "./email-config.component.html",
  styleUrls: ["./email-config.component.css"],
})
export class EmailConfigComponent implements OnInit {
  public emailForm: FormGroup = new FormGroup({
    to: new FormControl(),
    cc: new FormControl(),
    bcc: new FormControl(),
    subject: new FormControl(),
    body: new FormControl(),
    attachments: new FormControl(),
  });

  public configForm: FormGroup = new FormGroup({
    domain: new FormControl(),
    port: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    dkim: new FormControl(),
  });

  public dev: false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmitEmail() {
    console.log(this.emailForm);

    this.http
      .get("http://localhost:1337/email/sendEmail")
      .subscribe((response) => {
        console.log("after http");
        console.log(response);
      });
  }

  onSubmitConfig() {
    console.log(this.configForm);
  }

  checkExistingConfigs() {}
}
