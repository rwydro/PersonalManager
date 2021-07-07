using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Controllers.User.Dtos
{
    public class UserDto
    {
        [NotNull] public Guid UserIdentifier { get; set; }
        public UserRole Role { get; set; }
        [AllowNull]public string DisplayName { get; set; }
    }
}
