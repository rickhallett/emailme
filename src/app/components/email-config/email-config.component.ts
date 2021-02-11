import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

type SmtpServerConfig = {
  id: number;
  name: string;
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
};

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
    smtpServer: new FormControl(),
  });

  public smtpServerConfigs: SmtpServerConfig[] = [];

  public dev: boolean = false;
  public copies: boolean = false;
  public authUI: boolean = false;
  public dkimUI: boolean = false;
  public toggleConfig: boolean = true;

  constructor(private http: HttpClient) {
    this.emailForm.patchValue({
      from: "'Example Team' <from@example.com>",
      to: "user1@example.com, user2@example.com",
      cc: "board@example.com",
      bcc: "director@example.com",
      subject: "Test Email",
      body:
        "This is a test email generated from within email-config-component.ts",
      attachments: [],
    });

    /**
     * Error: Uncaught (in promise): Error: Must supply a value for form control with name: 'smtpServer'. forEach@[native code] EmailConfigComponent
     * createClass createDirectiveInstance createViewNodes createRootView callWithDebugContext forEach@[native code] forEach@[native code]
     */
    this.http
      .get<SmtpServerConfig[]>("http://localhost:3000/smtpconfigs")
      .subscribe((configs) => {
        console.log("configs returned from json-server", configs);
        this.smtpServerConfigs = configs;
        // this.emailForm.patchValue({ smtpServer: configs[0] });
      });
  }

  ngOnInit() {
    this.getSmtpConfigs();
  }

  ngOnViewChecked() {}

  toggleDevMode() {
    this.dev = !this.dev;
  }

  getSmtpConfigs() {}

  formatConfigSelectOption(config: SmtpServerConfig) {
    return `${config.name}: [host: ${config.host}] [port: ${config.port}] [user: ${config.auth.user}]`;
  }

  onSubmitEmail() {
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
}
