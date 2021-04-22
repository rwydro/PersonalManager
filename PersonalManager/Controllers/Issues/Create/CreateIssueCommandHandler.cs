using System;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Data;
using PersonalManager.Exceptions;
using PersonalManager.Infrastructure;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Controllers.Issues.Create
{

    public class CreateIssueCommandCommandHandler : ICommandHandler<CreateIssueCommand, CreateIssueCommandResult>
    {
        private IDataContextProvider dataContextProvider;

        public CreateIssueCommandCommandHandler(IDataContextProvider dataContext)
        {
            this.dataContextProvider = dataContext;
        }


        public async Task<CreateIssueCommandResult> Handle(CreateIssueCommand command)
        {
            await using var dataContext = dataContextProvider.Get();
            var issues = dataContext.Issue;
            var users = dataContext.User;
            var author = users.Single(el => el.UserIdentifier == command.IssueAuthorIdentifier);
            if (author.Role != UserRole.Administrator)
            {
                throw new UserHasNoPermissionException(500,$"User ${author.Login} has no permission to create task");
            }

            await issues.AddAsync(new Issue()
            {
                Tittle = command.Tittle,
                Description = command.Description,
                Author = author,
                AssignedUser = users.Single(usr => usr.UserIdentifier == command.IssueAssignedUserIdentifier),
                CreatedDate = DateTime.Now,
                DeadLine = command.DeadLine,
                State = IssueState.Open
            });
            await dataContext.SaveChangesAsync();
            return new CreateIssueCommandResult();
        }
    }
}