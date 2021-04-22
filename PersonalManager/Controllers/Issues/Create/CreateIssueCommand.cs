using System;
using System.Diagnostics.CodeAnalysis;

namespace PersonalManager.Controllers.Issues.Create
{
    public class CreateIssueCommand
    {
        public string Tittle { get; set; }
        public string Description { get; set; }
        [NotNull]
        public Guid IssueAuthorIdentifier { get; set; }
        [NotNull]
        public Guid IssueAssignedUserIdentifier { get; set; }
        public DateTime DeadLine { get; set; }
    }
}