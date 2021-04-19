import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication-service';
import {AuthenticateUserQuery} from '../services/models/authenticationModels';
import {Router} from '@angular/router';


export enum RightPanelViewEnum {
  CreateUserInfoView ,
  CreateUserAccountView ,
}


@Component({
  selector: 'app-authentication-panel',
  templateUrl: './authentication-panel.component.html',
  styleUrls: ['./authentication-panel.component.scss']
})
export class AuthenticationPanelComponent implements OnInit {
  private authenticationService: AuthenticationService;
  private router: Router;
  public login: string;
  public password: string;
  public showNotification: boolean;
  public rightLoginPanelView: RightPanelViewEnum;

  constructor(authenticationService: AuthenticationService, router: Router) {
    this.showNotification = false;
    this.authenticationService = authenticationService;
    this.rightLoginPanelView = RightPanelViewEnum.CreateUserInfoView;
    this.router = router;
  }

  ngOnInit(): void {
  }

  loginChange(value) {
    this.login = value;
  }

  passwordChange(value) {
    this.password = value;
  }

  async onLoginClick() {

    if(!this.login || !this.password){
      return;
    }
    const query = new AuthenticateUserQuery(this.login, this.password);
    const result = await this.authenticationService.authenticate(query).toPromise();
    if(result){
      await this.router.navigateByUrl('/test');
    }
  }

  onCreateAccountButtonClick() {
    this.rightLoginPanelView = RightPanelViewEnum.CreateUserAccountView
  }
}
