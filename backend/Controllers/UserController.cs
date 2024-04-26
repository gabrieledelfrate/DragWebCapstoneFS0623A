using ApiDragWeb.Models;
using System.Linq;
using System.Web.Http;

namespace ApiDragWeb.Controllers
{
    public class UsersController : ApiController
    {
        private readonly UserDbContext _context;

        public UsersController()
        {
            _context = new UserDbContext(); 
        }

        [HttpPost]
        [Route("api/users/register")]
        public IHttpActionResult Register(User user)
        {
            // Verifica se l'email è già stata utilizzata
            if (_context.Users.Any(u => u.Email == user.Email))
            {
                return Conflict();
            }

            _context.Users.Add(user);
            _context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { controller = "Users", id = user.Id }, user);
        }

        [HttpPost]
        [Route("api/users/login")]
        public IHttpActionResult Login(LoginRequest request)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == request.Email);

            if (user == null || user.Password != request.Password)
            {
                return Unauthorized(); 
            }

            return Ok(user); 
        }

        protected override void Dispose(bool disposing)
        {
            _context.Dispose(); 
            base.Dispose(disposing);
        }
    }
}
