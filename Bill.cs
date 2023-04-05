using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CEL_BILL.Models
{
  public class Bill
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BillID { get; set; }


    [DataType(DataType.Text)]
    public string BillNo { get; set; }


    public string ClientNo { get; set; }


    public string ProjectNo { get; set; }

    [Required]
    public string BillDate { get; set; }

    [Required]
    public int ProjectQuantity { get; set; }

    [Required]
    [StringLength(200)]
    public string Currency { get; set; }

    [Required]
    [StringLength(200)]
    public string TermsOfDelivery { get; set; }

    [Required]
    public string DeliveryDate { get; set; }

    [Required]
    [StringLength(200)]
    public string DeliveryTo { get; set; }

    [Required]
    [StringLength(200)]
    public string InvoiceTo { get; set; }

    [Required]
    [StringLength(200)]
    public string TermsOfPayment { get; set; }

    [Required]
    public float NetAmount { get; set; }

    [Required]
    public int Vat { get; set; }

    [Required]
    public float VatAmount { get; set; }

    [Required]
    public float IntotalAmount { get; set; }


    [Required]
    [StringLength(1000)]
    public string Description { get; set; }

    [Required]
    [StringLength(200)]
    public string Status { get; set; }
  }
}
