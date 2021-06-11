
using System;

namespace FlowerShop.Models
{
    public class Shop
    {
        public Guid ID{ get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public int Zip { get; set; }
    }
}
