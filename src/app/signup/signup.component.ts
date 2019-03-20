import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form;
  constructor(private service: CrudService) {
    this.form = new FormGroup({
      name: new FormControl('', []),
      email: new FormControl(),
      password: new FormControl(),
      cpassword: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    // let x;
    this.service.register(this.form.value).subscribe(response => {
      console.log(response);
      // x = response;
    });
    // console.log(x);
    this.form.reset();
  }
}
