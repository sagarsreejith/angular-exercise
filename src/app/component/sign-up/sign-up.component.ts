import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  titles: string[] = ["Mr.", "Mrs.", "Miss."];
  countries: Country[] = [
    { value: "india", viewValue: "India" },
    { value: "germany", viewValue: "Germany" },
    { value: "pakinstan", viewValue: "Pakinstan" }
  ];
  maritalStatus: string[] = ["Single", "Married"];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      titileCode: ["", Validators.required],
      fullNme: ["", Validators.required],
      phoneNumber: ["", Validators.required],
      nationality: ["", Validators.required],
      dob: ["", Validators.required],
      address: ["", Validators.required],
      maritalStatus: ["", Validators.required],
      addressDuration: ["", Validators.required]
    });
    
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }
}
