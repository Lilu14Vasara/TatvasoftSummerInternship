using Microsoft.AspNetCore.Mvc;
using LoginApp.Models;

namespace LoginApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (request == null)
            {
                return BadRequest("Empty request body");
            }

            Console.WriteLine($"Received: {request.Username}, {request.Password}");

            if (request.Username == "admin" && request.Password == "123456")
                return Ok("Login successful");
            else
                return Unauthorized("Invalid credentials");
        }
    }
}
