using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace Namin.Server.Controllers
{
    [ApiController]
    //[Route("[controller]")]
    [Route("namintax/contact")]
    public class ContactController : Controller
    {
        [HttpPost]
        public IActionResult Post(Contact email)
        {
            // TODO: Move these to appsettings.json or environment variables for production!
            var smtpHost = "smtp.gmail.com";
            var smtpPort = 587;
            var smtpUser = "guhilotv@gmail.com"; // Use your Gmail address
            var smtpPass = "kbns pyis caaa aoql"; // Use a Gmail App Password, NOT your main password

            var toAddress = "guhilotv@gmail.com"; // Where you want to receive the contact form emails

            try
            {
                var mail = new MailMessage
                {
                    From = new MailAddress(smtpUser),
                    Subject = $"Contact Form: {email.name}",
                    Body = $"Name: {email.name}\nPhone: {email.phone}\nMessage: {email.message}",
                    IsBodyHtml = false
                };
                mail.To.Add(toAddress);

                using var smtp = new SmtpClient(smtpHost, smtpPort)
                {
                    Credentials = new NetworkCredential(smtpUser, smtpPass),
                    EnableSsl = true
                };

                smtp.Send(mail);

                return Ok(new { status = "success", message = "Email sent successfully" });
            }
            catch (SmtpException ex)
            {
                // Return the error message for easier debugging
                return StatusCode(500, new { status = "error", message = "Failed to send email", error = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { status = "error", message = "Unexpected error", error = ex.Message });
            }
        }
    }
}


//using Microsoft.AspNetCore.Mvc;
//using System.Net.Mail;
//using System.Net;

//namespace Namin.Server.Controllers
//{
//    [ApiController]
//    [Route("[controller]")]
//    public class ContactController : Controller
//    {

//        [HttpPost]
//        public string Post(Contact email)
//        {
//            // Configure your SMTP settings
//            var smtpHost = "smtp.gmail.com"; // e.g., smtp.gmail.com
//            var smtpPort = 587; // 587 or 465 for SSL 
//            var smtpUser = "guhilotv@gmail.com";
//            var smtpPass = "123poi!@#POI";

//            var toAddress = "guhilotv@gmail.com"; // Where you want to receive the contact form emails

//            try
//            {
//                var mail = new MailMessage
//                {
//                    From = new MailAddress(smtpUser),
//                    Subject = $"Contact Form: {email.name}",
//                    Body = $"Name: {email.name}\nPhone: {email.phone}\nMessage: {email.message}",
//                    IsBodyHtml = false
//                };
//                mail.To.Add(toAddress);

//                using var smtp = new SmtpClient(smtpHost, smtpPort)
//                {
//                    Credentials = new NetworkCredential(smtpUser, smtpPass),
//                    EnableSsl = true
//                };

//                smtp.Send(mail);

//                return "Email sent successfully";
//            }
//            catch (Exception ex)
//            {
//                return "Failed to send email";
//            }
//        }
//    }
//}


