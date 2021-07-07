using System.Diagnostics.CodeAnalysis;
using PersonalManager.Infrastructure.Enums;

namespace PersonalManager.Controllers.User.Add
{
    public class CreateUserCommand
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string DisplayName { get; set; }
        public UserRole Role { get; set; }
        [AllowNull]
        public string AdminKey { get; set; }
        public string Email { get; set; }
    }
}
