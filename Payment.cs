using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CEL_BILL.Models
{
  public class Payment
  {

    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int PaymentID { get; set; }

    [DataType(DataType.Text)]
    public string PaymentNo { get; set; }

    public string BillNo { get; set; }

    [Required]
    public float IntotalAmount { get; set; }

    [Required]
    public float PayAmount { get; set; }

    [Required]
    public float DueAmount { get; set; }

    [Required]
    public string DueDate { get; set; }
  }
}
