import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../model/user";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  login() {
    let user: User = {
      user: this.form.value.user,
      password: this.form.value.password
    }
    this.loginService.login(user)
    this.router.navigate(['students/management']);
  }

}
