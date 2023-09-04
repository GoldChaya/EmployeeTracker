using HomeworkMay24.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkMay24.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Constr");
        }
        [HttpGet]
        [Route("getcounts")]
        public CandidateCounts GetCounts()
        {
            var repo = new EmployeeRepsitory(_connectionString);
            return repo.GetCounts();
        }
    }
}
