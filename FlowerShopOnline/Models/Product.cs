using System;

namespace FlowerShop.Models
{
    public class Product
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public byte[] Picture { get; set; }
        public string Type { get; set; }
    }
}
