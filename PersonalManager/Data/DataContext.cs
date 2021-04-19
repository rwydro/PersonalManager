using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PersonalManager.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){}

        public DbSet<User> User { get; set; }
        public DbSet<Issue> Issue{ get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Issue>().HasOne(exp => exp.AssignedUser).WithMany(exp => exp.Issues);
        }
    }
}   
