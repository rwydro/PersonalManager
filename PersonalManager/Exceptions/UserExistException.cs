using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace PersonalManager.Exceptions
{
    public class UserExistException:Exception, IExceptionBase
    {
        public int Status { get; }
        public string Name { get; }

        public UserExistException(string message):base(message)
        {
            this.Status = 500;
            this.Name = ExceptionsDictionary.UserExistException;
        }
    }
}
