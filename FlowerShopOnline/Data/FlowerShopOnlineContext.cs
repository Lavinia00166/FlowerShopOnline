using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FlowerShop.Models;

namespace FlowerShopOnline.Data
{
    public class FlowerShopOnlineContext : DbContext
    {
        public FlowerShopOnlineContext (DbContextOptions<FlowerShopOnlineContext> options)
            : base(options)
        {
        }

        public DbSet<FlowerShop.Models.Client> Client { get; set; }

        public DbSet<FlowerShop.Models.Event> Event { get; set; }

        public DbSet<FlowerShop.Models.Order> Order { get; set; }

        public DbSet<FlowerShop.Models.Product> Product { get; set; }

        public DbSet<FlowerShop.Models.Shop> Shop { get; set; }
    }
}
