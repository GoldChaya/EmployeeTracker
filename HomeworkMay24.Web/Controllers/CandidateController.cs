using HomeworkMay24.Data;
using HomeworkMay24.Web.ViewModels;
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
        [HttpPost]
        [Route("addcandidate")]
        public void AddCandidate(PotentialEmployee candidate)
        {
            var repo = new EmployeeRepsitory(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("GetByStatus")]
        public List<PotentialEmployee> GetCandidates(Status status)
        {
            var repo = new EmployeeRepsitory(_connectionString);
            return repo.GetByStatus(status);
        }
        [HttpGet]
        [Route("GetById")]
        public PotentialEmployee GetById(int id)
        {
            var repo = new EmployeeRepsitory(_connectionString);
            return repo.GetById(id);

        }
        [HttpPost]
        [Route("UpdateCandidateStatus")]
        public void UpdateCandidateStatus (UpdateCandidateViewModel vm)
        {
            var repo = new EmployeeRepsitory(_connectionString);
            repo.UpdateCandidateStatus(vm.Id, vm.Status);
        }
    }
}
