using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Controllers.Issues.Create;
using PersonalManager.Controllers.Issues.Get;
using PersonalManager.Controllers.User.Get;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.Issues
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private ICommandDispatcher commandDispatcher;
        private IQueryDispatcher queryDispatcher;

        public IssuesController(ICommandDispatcher commandDispatcher, IQueryDispatcher queryDispatcher)
        {
            this.commandDispatcher = commandDispatcher;
            this.queryDispatcher = queryDispatcher;
        }

        [HttpPost, Route("create")]
        public async Task<CreateIssueCommandResult> Create(CreateIssueCommand command)
        {
            return await commandDispatcher.Dispatch<CreateIssueCommand, CreateIssueCommandResult>(command);
        }

        [HttpGet]
        public async Task<GetIssuesQueryResult> Get()
        {
            return await queryDispatcher.Dispatch<GetIssuesQuery, GetIssuesQueryResult>(new GetIssuesQuery());
        }
    }
}
