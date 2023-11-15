import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Login } from './model/login.model';


import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';

import toasrt from "toastr";
toasrt.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  userLogin: Login;

  constructor(
    private frmBuilder: FormBuilder,
    private storage: StorageService
  
  ) { }

  ngOnInit() {
    this.userLogin = new Login();
    this.buildSkillForm();

  }

  private buildSkillForm() {
    this.loginGroup = this.frmBuilder.group({
      'user': null,
      'password': null
    });
  }

  login() {
    const login: Login = Object.assign(new Login(), this.loginGroup.value)

    if (login.password === "123" && login.user === "user") {
      this.storage.setLocalUser(login);
      location.reload();

    } else if (login.password === "123" && login.user === "manager") {
      this.storage.setManager(login);
      location.reload();

    } else {
      toasrt.error('User ou Senha inválido(a)!');
    }
  }


}
