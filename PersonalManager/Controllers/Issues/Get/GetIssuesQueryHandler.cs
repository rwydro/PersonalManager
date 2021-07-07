using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Controllers.Issues.Dtos;
using PersonalManager.Data;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.Issues.Get
{
    public class GetIssuesQueryHandler: IQueryHandler<GetIssuesQuery, GetIssuesQueryResult>
    {

        private IDataContextProvider dataContext;

        public GetIssuesQueryHandler(IDataContextProvider dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task<GetIssuesQueryResult> Handle(GetIssuesQuery query)
        {
            var data = new GetIssuesQueryResult()
            {
                Issues = dataContext.Get().Issue.Select(el => new IssueDto()
                {
                    AssignedUser = el.AssignedUser.UserIdentifier,
                    Author = el.Author.UserIdentifier,
                    CreatedDate = el.CreatedDate,
                    DeadLine = el.DeadLine,
                    Description = el.Description,
                    State = el.State,
                    Tittle = el.Tittle

                })
            };
            return data;
        }
    }
}
