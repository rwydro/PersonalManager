using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersonalManager.Controllers.User.Add;
using PersonalManager.Data;
using PersonalManager.Exceptions;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.User
{
    public class CreateUserCommandHandler:ICommandHandler<CreateUserCommand, CreateUserCommandResult>
    {
        private readonly IDataContextProvider dataContextProvider;

        public CreateUserCommandHandler(IDataContextProvider dataContextProvider)
        {
            this.dataContextProvider = dataContextProvider;
        }

        public async Task<CreateUserCommandResult> Handle(CreateUserCommand command)
        {
            await using var dataContext = dataContextProvider.Get();
            var userExist = await dataContext.User.SingleOrDefaultAsync(el => el.Login == command.Login);
            if (userExist != null)
            {
                throw new UserExistException($"The login {command.Login} is occupied. Please enter another login");
            }
            await dataContext.User.AddAsync(new Data.User()
            {
                Login = command.Login, Password = command.Password, 
                DisplayName = command.DisplayName, Role = command.Role,
                UserIdentifier = Guid.NewGuid()
            });
            await dataContext.SaveChangesAsync();
            return new CreateUserCommandResult();
        }
    }
}
