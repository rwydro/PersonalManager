using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Data
{
    public class Issue: EntityBase
    {
        [Key]
        [NotNull]
        public int Id { get; set; }
        [NotNull]
        public string Tittle { get; set; }
        public string Description { get; set; }
 
        [NotNull]
        public User Author { get; set; }
        [NotNull]
        public User AssignedUser { get; set; }
        [NotNull]
        public DateTime CreatedDate { get; set; }
        public DateTime DeadLine { get; set; }
        [NotNull]
        public IssueState State { get; set; }
    }
}
