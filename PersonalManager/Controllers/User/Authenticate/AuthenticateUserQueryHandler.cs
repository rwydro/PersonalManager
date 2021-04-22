using System;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Data;
using PersonalManager.Exceptions;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.User.Authenticate
{

    public class AuthenticateUserQueryHandlerCommandHandler : ICommandHandler<AuthenticateUserQuery, AuthenticateUserQueryResult>
    {
        private IDataContextProvider dataContextProvider;

        public AuthenticateUserQueryHandlerCommandHandler(IDataContextProvider dataContextProvider)
        {
            this.dataContextProvider = dataContextProvider;
        }

        public async Task<AuthenticateUserQueryResult> Handle(AuthenticateUserQuery query)
        {
            try
            {
                await using var dataContext = dataContextProvider.Get();
                var user = dataContext.User
                    .Single(el => (el.Login == query.Login && el.Password == query.Password));
                return new AuthenticateUserQueryResult() { Login = user.Login, AccessToken = user.UserIdentifier };
            }
            catch (Exception e)
            {
                throw  new AuthenticationFailedException(500, e.Message);
            }
           
        }
    }
}