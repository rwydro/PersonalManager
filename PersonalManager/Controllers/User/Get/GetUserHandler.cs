using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
using Microsoft.EntityFrameworkCore;
using PersonalManager.Controllers.User.Dtos;
using PersonalManager.Data;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.User.Get
{

    public class GetUserCommandHandler : ICommandHandler<GetUsersCommand, GetUsersResult>
    {
        private readonly IDataContextProvider dataContextProvider;

        public GetUserCommandHandler(IDataContextProvider dataContextProvider)
        {
            this.dataContextProvider = dataContextProvider;
        }

        public async Task<GetUsersResult> Handle(GetUsersCommand command)
        {
            var data = new GetUsersResult() { Users = dataContextProvider.Get().User.Select(
                    el => new UserDto()
                    {
                        DisplayName = el.DisplayName,
                        Role = el.Role,
                        UserIdentifier = el.UserIdentifier
                    }
                )
            };
            return data;
        }
    }
}