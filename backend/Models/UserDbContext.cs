using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiDragWeb.Models
{
    public class UserDbContext : DbContext
    {
        public UserDbContext() : base("name=UserDbContext")
        {
        }

        public DbSet<User> Users { get; set; }
    }
}