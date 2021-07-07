using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Controllers.Issues.Dtos
{
    public class IssueDto
    {
        public string Tittle { get; set; }
        public string Description { get; set; }
        [NotNull]
        public Guid Author { get; set; }
        [NotNull]
        public Guid AssignedUser { get; set; }
        [NotNull]
        public DateTime CreatedDate { get; set; }
        public DateTime DeadLine { get; set; }
        [NotNull]
        public IssueState State { get; set; }
    }
}
