import { Component, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-smtp-config",
  templateUrl: "./smtp-config.component.html",
  styleUrls: ["./smtp-config.component.css"],
})
export class SmtpConfigComponent implements OnInit {
  @Input() authUI: boolean;
  @Input() dkimUI: boolean;

  public configForm: FormGroup = new FormGroup({
    domain: new FormControl(),
    port: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    dkim: new FormControl(),
  });

  constructor() {}

  ngOnInit() {}

  onSubmitConfig() {}

  checkExistingConfigs() {}
}
