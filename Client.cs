using System.ComponentModel.DataAnnotations;

namespace CEL_BILL.Models
{
  public class Client
  {
    [Key]
    public int ClientID { get; set; }

    [Required]
    [DataType(DataType.Text)]
    public string ClientNo { get; set; }

    [Required]
    [DataType(DataType.Text)]
    [StringLength(200)]
    public string ClientName { get; set; }

    [Required]
    [EmailAddress]
    [DataType(DataType.EmailAddress)]
    public string ClientEmail { get; set; }

    [Required]
    [DataType(DataType.PhoneNumber)]
    public string ClientPhoneNo { get; set; }

    [Required]
    [StringLength(200)]
    [DataType(DataType.Text)]
    public string ClientAddress { get; set; }
  }
}
