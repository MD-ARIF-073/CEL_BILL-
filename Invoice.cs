using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CEL_BILL.Models
{
  public class Invoice
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int InvoiceID { get; set; }

    [DataType(DataType.Text)]
    public string InvoiceNo { get; set; }

    [Required]
    public string InvoiceDate { get; set; }

    public string ClientNo { get; set; }

    public string ProjectNo { get; set; }

    public string BillNo { get; set; }

    [Required]
    public float NetAmount { get; set; }

    [Required]
    public int Vat { get; set; }

    [Required]
    public float VatAmount { get; set; }

    [Required]
    public float IntotalAmount { get; set; }

    [Required]
    [DataType(DataType.Text)]
    [StringLength(200)]
    public string Description { get; set; }
  }
}
