import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

/**
 * TODO: componentising the email-config-component took away
 * its dependency on configForm. This would need to be passed
 * in some other way
 */

@Component({
  selector: "app-inspector",
  templateUrl: "./inspector.component.html",
  styleUrls: ["./inspector.component.css"],
})
export class InspectorComponent implements OnInit {
  @Input() copies: boolean;
  @Input() authUI: boolean;
  @Input() dkimUI: boolean;
  @Input() emailForm: FormGroup;
  @Input() configForm: FormGroup;

  constructor() {}

  ngOnInit() {}
}
