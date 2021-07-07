using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Controllers.Issues.Dtos;

namespace PersonalManager.Controllers.Issues.Get
{
    public class GetIssuesQueryResult
    {
        public IEnumerable<IssueDto> Issues { get; set; }
    }
}
