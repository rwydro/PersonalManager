using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Data
{
    public class EntityBase
    {
        public DateTime? Modified { get; set; }
        public EntityBase()
        {
            Modified = DateTime.UtcNow;
        }
    }
}
