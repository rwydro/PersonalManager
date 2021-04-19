using System;
using System.Collections.Generic;

namespace PersonalManager.Controllers.User.Get
{
    public class GetUsersResult
    {
        public IEnumerable<Data.User> Users { get; set; }
    }

    public class GetUserByIdResult
    {
    }
}