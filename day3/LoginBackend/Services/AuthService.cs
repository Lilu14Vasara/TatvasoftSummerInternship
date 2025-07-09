using LoginApp.Models;

namespace LoginApp.Services
{
    public class AuthService
    {
        public bool Login(string username, string password)
        {
            return username == "admin" && password == "123456";
        }
    }
}
