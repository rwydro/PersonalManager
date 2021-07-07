using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Exceptions
{
    public class AuthenticationFailedException : Exception, IExceptionBase
    {
        public int Status { get; }
        public string Name { get; }

        public AuthenticationFailedException(int status, string msg) : base(msg)
        {
            this.Status = status;
            this.Name = ExceptionsDictionary.AuthenticationFailed;
        }
    }
}
