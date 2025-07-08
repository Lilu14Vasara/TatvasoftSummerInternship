using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace authbackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [Authorize(Roles = "Admin")]
        [HttpGet("admin-data")]
        public IActionResult AdminData() => Ok("Only Admins can see this");

        [Authorize(Roles = "User")]
        [HttpGet("user-data")]
        public IActionResult UserData() => Ok("Only Users can see this");

        [Authorize]
        [HttpGet("common-data")]
        public IActionResult CommonData() => Ok("Any logged-in user can see this");
    }
}