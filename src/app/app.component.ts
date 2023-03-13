import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Session} from "./model/session";
import {SessionService} from "./core/service/session.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession();
  }

  title = '3PFGrellet';
  sideNavOpened = true;

  session$!: Observable<Session>

  logout() {
    let session: Session = {
      activeSession: false
    }
    this.sessionService.logout(session);
    this.router.navigate(['auth/login'])
  }
}
