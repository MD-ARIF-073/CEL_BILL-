using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CEL_BILL.Models;
using System.Drawing.Printing;
using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace CEL_BILL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillsController : ControllerBase
    {
        private readonly DataContext _context;

        public BillsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Bills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bill>>> GetBill()
        {
          if (_context.Bill == null)
          {
              return NotFound();
          }
            return await _context.Bill.ToListAsync();
        }

        // GET: api/Bills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bill>> GetBill(int id)
        {
          if (_context.Bill == null)
          {
              return NotFound();
          }
            var bill = await _context.Bill.FindAsync(id);

            if (bill == null)
            {
                return NotFound();
            }

            return bill;
        }

        // PUT: api/Bills/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBill(int id, Bill bill)
        {
            if (id != bill.BillID)
            {
                return BadRequest();
            }

            _context.Entry(bill).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bills
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bill>> PostBill(Bill bill)
        {
          if (_context.Bill == null)
          {
              return Problem("Entity set 'DataContext.Bill'  is null.");
          }
            _context.Bill.Add(bill);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBill", new { id = bill.BillID }, bill);
        }

        // DELETE: api/Bills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBill(int id)
        {
            if (_context.Bill == null)
            {
                return NotFound();
            }
            var bill = await _context.Bill.FindAsync(id);
            if (bill == null)
            {
                return NotFound();
            }

            _context.Bill.Remove(bill);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BillExists(int id)
        {
            return (_context.Bill?.Any(e => e.BillID == id)).GetValueOrDefault();
        }



    [HttpGet("BillGeneratePDF")]
    public async Task<IActionResult> BillGeneratePDF(int id)
    {
      var document = new PdfDocument();
      //var invoice = await ProjectRepository.Invoice.FindAsync(id);
      Bill header = await _context.Bill.FindAsync(id);
      string HtmlContent = "<div style='width:100%;'>";
      HtmlContent += "<h1>Computer Ease Limited</h1>";
      if (header != null)
      {
        HtmlContent += "<h3> Bill Date: " + header.BillDate + "</h3>";
        HtmlContent += "<h3> Bill No: " + header.BillNo + "</h3>";
        HtmlContent += "<h3> Client No : " + header.ClientNo + "</h3>";
        HtmlContent += "<h3> Project No : " + header.ProjectNo + "</h3>";
        HtmlContent += "<h4> Contact: 122, West Dhanmondi, Dhaka-1209, Bangladesh, +880-2-58151334,info@celimited.com</h4>";
      }

      HtmlContent += "<div>";
      HtmlContent += "<h3> Delivery Date: " + header.DeliveryDate + "</h3>";
      HtmlContent += "<h3> Delivery To: " + header.DeliveryTo + "</h3>";
      HtmlContent += "<h3> Invoice To: " + header.InvoiceTo + "</h3>";
      HtmlContent += "</div>";

      HtmlContent += "<div>";
      HtmlContent += "<table style ='width:100%; border: 1px solid #000'>";
      HtmlContent += "<thead style='font-weight:bold'>";
      HtmlContent += "<tr>";
      HtmlContent += "<td style='border:1px solid #000'> Description </td>";
      HtmlContent += "<td style='border:1px solid #000'> Net Amount </td>";
      HtmlContent += "<td style='border:1px solid #000'> Vat </td>";
      HtmlContent += "<td style='border:1px solid #000'> Vat Amount </td>";
      HtmlContent += "<td style='border:1px solid #000'> Total Amount </td>";
      HtmlContent += "</tr>";
      HtmlContent += "</thead >";

      HtmlContent += "<tbody>";
      HtmlContent += "<tr>";
      HtmlContent += "<td>" + header.Description + "</td>";
      HtmlContent += "<td>" + header.NetAmount + "</td>";
      HtmlContent += "<td>" + header.Vat + "</td>";
      HtmlContent += "<td>" + header.VatAmount + "</td>";
      HtmlContent += "<td>" + header.IntotalAmount + "</td>";
      HtmlContent += "</tr>";
      HtmlContent += "</tbody>";
      HtmlContent += "</table>";
      HtmlContent += "</div>";
      HtmlContent += "</div>";




      PdfGenerator.AddPdfPages(document, HtmlContent, PageSize.A4);
      byte[]? res = null;
      using (MemoryStream ms = new MemoryStream())
      {
        document.Save(ms);
        res = ms.ToArray();
      }
      string FileName = "BILL-" + id + ".pdf";

      return File(res, "application/pdf", FileName);
    }



  }
}
