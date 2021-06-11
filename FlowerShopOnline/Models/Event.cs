using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowerShop.Models
{
    public class Event
    {
        public Guid ID { get; set; }
        public string Description { get; set; }
        public Guid ProductId{ get; set; }
        public Product Product { get; set; } 
    }
}
