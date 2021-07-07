using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalManager.Controllers.User.Add;
using PersonalManager.Controllers.User.Authenticate;
using PersonalManager.Controllers.User.Get;
using PersonalManager.Exceptions;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.User
{
    //todo zmienic nazwe na User oraz nazwe tabeli na User
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ICommandDispatcher dispatcher;
        private readonly IQueryDispatcher queryDispatcher;
        private readonly ILogger<UsersController> logger;

        public UsersController(ICommandDispatcher dispatcher, ILogger<UsersController> logger, IQueryDispatcher queryDispatcher)
        {
            this.dispatcher = dispatcher;
            this.logger = logger;
            this.queryDispatcher = queryDispatcher;
        }

        [HttpPost]
        public async Task<CreateUserCommandResult> Create(CreateUserCommand command)
        {
            return await dispatcher.Dispatch<CreateUserCommand, CreateUserCommandResult>(command);
        }

        [HttpPost, Route("authenticate")]
        public async Task<AuthenticateUserQueryResult> AuthenticateUser(AuthenticateUserQuery query)
        {
            return await dispatcher.Dispatch<AuthenticateUserQuery, AuthenticateUserQueryResult>(
                new AuthenticateUserQuery() {Login = query.Login, Password = query.Password });
        }

        [HttpGet]
        public async Task<GetUsersResult> Get()
        {
            return  await dispatcher.Dispatch<GetUsersCommand, GetUsersResult>(new GetUsersCommand());
        }

        [HttpDelete]
        [Authorize(Policy = "RequireAdministratorRole")]
        public async Task<GetUsersResult> Delete(Guid userToken)
        {
            throw new NotImplementedException();
        }
    }
}
