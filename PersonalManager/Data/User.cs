using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Data
{
    [Table("Users")]
    public class User : EntityBase
    {
        [NotNull] public string Login { get; set; }
        [NotNull] public string Password { get; set; }
        
        [NotNull] public Guid UserIdentifier { get; set; }
        public UserRole Role { get; set; }
        public string DisplayName { get; set; }
        public ICollection<Issue> Issues { get; set; }
    }
}
