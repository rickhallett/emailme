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
    from: new FormControl(),
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

  constructor(private http: HttpClient) {
    this.emailForm.setValue({
      from: "'Example Team' <from@example.com>",
      to: "user1@example.com, user2@example.com",
      cc: "board@example.com",
      bcc: "director@example.com",
      subject: "Test Email",
      body:
        "This is a test email generated from within email-config-component.ts",
      attachments: [],
    });
  }

  ngOnInit() {}

  ngOnViewChecked() {}

  onSubmitEmail() {
    // console.log("this.emailForm", this.emailForm);

    // console.log(
    //   'this.emailForm.get("attachments").value',
    //   this.emailForm.get("attachments").value
    // );

    const inspect = this.convertFormGroupToPayload(this.emailForm.value);
    console.log("convertFormGroupToPayload", inspect);

    // return;

    this.http
      .post(
        "http://localhost:1337/api/emailer/sendmail",
        this.convertFormGroupToPayload(this.emailForm.value)
      )
      .subscribe((response) => {
        console.log("after http post", response);
      });
  }

  convertFormGroupToPayload(formGroup: FormGroup) {
    return {
      ...this.emailForm.value,
      attachments:
        this.emailForm.get("attachments").value.length > 0
          ? this.emailForm.get("attachments")
          : [],
    };
  }

  onSubmitConfig() {
    console.log(this.configForm);
  }

  checkExistingConfigs() {}
}
