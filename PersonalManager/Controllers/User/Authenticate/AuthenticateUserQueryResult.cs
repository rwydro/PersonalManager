using System;

namespace PersonalManager.Controllers.User.Authenticate
{
    public class AuthenticateUserQueryResult
    {
        public string Login { get; set; }
        public Guid AccessToken { get; set; }
    }
}