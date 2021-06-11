using System;

namespace FlowerShop.Models
{
    public class Order
    {
        public Guid ID { get; set; }
        public DateTime OrderDate { get; set; }
        public string Status { get; set; }
        
        public Guid ClientId { get; set; }
        public Client Client { get; set; }

        public Guid ShopId { get; set; }
        public Shop Shop { get; set; }
    }
}
