import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {SessionService} from "../../core/service/session.service";
import {Session} from "../../model/session";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sessionService: SessionService) { }

  login(user: User){
    let session: Session = {
      activeSession: true,
      activeUser: user
    }

    this.sessionService.createSession(session);

  }
}
