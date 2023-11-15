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

    if (this.getLoginUser(login.user) === login.user && login.password === "user2023") {
      login.matricula = login.user

      this.storage.setLocalUser(login);
      location.reload();

    } else if (login.password === "manager2023" && login.user === "manager") {
      this.storage.setManager(login);
      location.reload();

    } else {
      toasrt.error('User ou Senha inválido(a)!');
    }
  }

  private getLoginUser(matricula: string): string {

    switch (matricula) {
      case 'M01':
        console.log("Matricula: " + matricula);
        return matricula

      case 'M02':
        console.log("Matricula: " + matricula);
        return matricula

      case 'M03':
        console.log("Matricula: " + matricula);
        return matricula

      case 'M04':
        console.log("Matricula: " + matricula);
        return matricula

      case 'M05':
        console.log("Matricula: " + matricula);
        return matricula
      case 'M06':
        console.log("Matricula: " + matricula);
        return matricula

      default:
        console.log("Matricula não encontrada para o Colaborador");
        break
    }


  }

  /* 
  M01
  M02
  M03
  M04
  M05
  M06
  */



}
