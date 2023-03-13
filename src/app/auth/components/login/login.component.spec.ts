import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthRoutingModule} from "../../auth-routing.module";
import {MaterialModule} from "../../../shared/material/material.module";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        AuthRoutingModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Empty User', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('');
    password.setValue('123456');

    expect(form.valid).toBeFalse();
  });

  it('Empty Password', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('test@test.com');
    password.setValue('');

    expect(form.valid).toBeFalse();
  });

  it('Wrong User format', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('test');
    password.setValue('123456');

    expect(form.valid).toBeFalse();
  });

  it('Wrong User format', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('test');
    password.setValue('123456');

    expect(form.valid).toBeFalse();
  });

  it('Login form OK', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('test@test.com');
    password.setValue('123456');

    expect(form.valid).toBeTrue();
  });

  it('Press clean button login OK', () => {
    const form = component.form;
    const user = form.controls['user'];
    const password = form.controls['password']
    user.setValue('test@test.com');
    password.setValue('123456');

    const button = fixture.debugElement.query(By.css("#btnClear"))
    button.nativeElement.click();
    fixture.detectChanges();

    const expectedUser = form.controls['user'];
    expectedUser.setValue('');

    const expectedPassword = form.controls['password'];
    expectedPassword.setValue('')

    expect(user).toEqual(expectedUser);
    expect(password).toEqual(expectedPassword);


  });

});
