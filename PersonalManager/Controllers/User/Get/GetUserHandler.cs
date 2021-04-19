using System;
using System.Linq;
using System.Threading.Tasks;
using Castle.DynamicProxy.Generators.Emitters.SimpleAST;
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
            await using var dataContext = dataContextProvider.Get();
            var data = new GetUsersResult() { Users = dataContext.User };
            return data;
        }
    }
}