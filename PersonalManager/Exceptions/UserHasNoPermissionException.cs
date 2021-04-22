using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Exceptions
{
    public class UserHasNoPermissionException: Exception, IExceptionBase
    {
        public int Status { get; }
        public string Name { get; }

        public UserHasNoPermissionException(int status, string msg) : base(msg)
        {
            Status = status;
            Name = "UserHasNoPermission";
        }
    }
}
