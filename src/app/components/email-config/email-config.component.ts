import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { config } from 'process';

@Component({
  selector: 'app-email-config',
  templateUrl: './email-config.component.html',
  styleUrls: ['./email-config.component.css']
})
export class EmailConfigComponent implements OnInit {
  public emailForm: FormGroup = new FormGroup({
    'to': new FormControl(),
    'cc': new FormControl(),
    'bcc': new FormControl(),
    'subject': new FormControl(),
    'body': new FormControl()
  });

  public configForm: FormGroup = new FormGroup({
    'domain': new FormControl(),
    'port': new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmitEmail() {
    console.log(this.emailForm);
  }

  onSubmitConfig() {
    console.log(this.configForm);
  }

}
