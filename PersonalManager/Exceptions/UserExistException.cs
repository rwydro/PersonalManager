using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace PersonalManager.Exceptions
{
    public class UserExistException:Exception
    {
        private HttpStatusCode Status { get; }
        public UserExistException(string message):base(message)
        {
            Status = HttpStatusCode.InternalServerError;
        }
    }
}
