using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Controllers.Issues.Create;
using PersonalManager.Infrastructure;

namespace PersonalManager.Controllers.Issues
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssuesController : ControllerBase
    {
        private ICommandDispatcher commandDispatcher;

        public IssuesController(ICommandDispatcher commandDispatcher)
        {
            this.commandDispatcher = commandDispatcher;
        }

        [HttpPost]
        public async Task<CreateIssueCommandResult> Create(CreateIssueCommand command)
        {
            return await commandDispatcher.Dispatch<CreateIssueCommand, CreateIssueCommandResult>(command);
        }
    }
}
