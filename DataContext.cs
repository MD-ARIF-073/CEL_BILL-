using CEL_BILL.Models;
using Microsoft.EntityFrameworkCore;

namespace CEL_BILL.Models
{
  public class DataContext : DbContext
  {
    public DataContext()
    {
    }
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Client> Client { get; set; }
    public DbSet<Project> Project { get; set; }
    public DbSet<Bill> Bill { get; set; }
    public DbSet<Payment> Payment { get; set; }
    public DbSet<Invoice> Invoice { get; set; }
  }
}
