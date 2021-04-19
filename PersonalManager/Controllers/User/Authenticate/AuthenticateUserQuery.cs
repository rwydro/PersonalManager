using System;

namespace PersonalManager.Controllers.User.Authenticate
{
    public class AuthenticateUserQuery
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}