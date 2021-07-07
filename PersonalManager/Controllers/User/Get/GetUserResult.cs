using System;
using System.Collections.Generic;
using PersonalManager.Controllers.User.Dtos;

namespace PersonalManager.Controllers.User.Get
{
    public class GetUsersResult
    {
        public IEnumerable<UserDto> Users { get; set; }
    }

    public class GetUserByIdResult
    {
    }
}