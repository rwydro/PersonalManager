export class AuthenticateUserQuery {
   private Login: string;
   private Password: string;

   constructor(login: string, password: string) {
     this.Login = login;
     this.Password = password;
   }
}

export class AuthenticateUserQueryResult {
  public Login: string;
  public AccessToken: string;

}
