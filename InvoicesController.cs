using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CEL_BILL.Models;
using PdfSharpCore;
using PdfSharpCore.Pdf;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace CEL_BILL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly DataContext _context;

        public InvoicesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Invoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoice()
        {
          if (_context.Invoice == null)
          {
              return NotFound();
          }
            return await _context.Invoice.ToListAsync();
        }

        // GET: api/Invoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetInvoice(int id)
        {
          if (_context.Invoice == null)
          {
              return NotFound();
          }
            var invoice = await _context.Invoice.FindAsync(id);

            if (invoice == null)
            {
                return NotFound();
            }

            return invoice;
        }

        // PUT: api/Invoices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoice(int id, Invoice invoice)
        {
            if (id != invoice.InvoiceID)
            {
                return BadRequest();
            }

            _context.Entry(invoice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceExists(id))
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

        // POST: api/Invoices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Invoice>> PostInvoice(Invoice invoice)
        {
          if (_context.Invoice == null)
          {
              return Problem("Entity set 'DataContext.Invoice'  is null.");
          }
            _context.Invoice.Add(invoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoice", new { id = invoice.InvoiceID }, invoice);
        }

        // DELETE: api/Invoices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(int id)
        {
            if (_context.Invoice == null)
            {
                return NotFound();
            }
            var invoice = await _context.Invoice.FindAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            _context.Invoice.Remove(invoice);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InvoiceExists(int id)
        {
            return (_context.Invoice?.Any(e => e.InvoiceID == id)).GetValueOrDefault();
        }


    [HttpGet("GeneratePDF")]
    public async Task<IActionResult> GeneratePDF(int id)
    {
      var document = new PdfDocument();
      //var invoice = await _context.Invoice.FindAsync(id);
      Invoice header = await _context.Invoice.FindAsync(id);
      string HtmlContent = "<div style='width:100%;'>";
      HtmlContent += "<h1>Computer Ease Limited</h1>";
      if (header != null)
      {
        HtmlContent += "<h2> Invoice Date: " + header.InvoiceDate + "</h2>";
        HtmlContent += "<h3> Invoice No: " + header.InvoiceNo + "</h3>";
        HtmlContent += "<h3> BillNo : " + header.BillNo + "</h3>";
        HtmlContent += "<h3> Client No : " + header.ClientNo + "</h3>";
        HtmlContent += "<h3> Project No : " + header.ProjectNo + "</h3>";
        HtmlContent += "<h4> Contact: 122, West Dhanmondi, Dhaka-1209, Bangladesh, +880-2-58151334,info@celimited.com</h4>";
      }
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
      byte[]? response = null;
      using (MemoryStream ms = new MemoryStream())
      {
        document.Save(ms);
        response = ms.ToArray();
      }
      string FileName = "Invoice_" + id + ".pdf";

      return File(response, "application/pdf", FileName);
    }
  }
}
