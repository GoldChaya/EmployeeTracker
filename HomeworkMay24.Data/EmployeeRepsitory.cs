using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace HomeworkMay24.Data
{
    public class EmployeeRepsitory
    {
        private readonly string _connectionString;
        public EmployeeRepsitory(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<PotentialEmployee> GetCandidates()
        {
            using var context = new EmployeeDataContext(_connectionString);
            return context.PotentialEmployee.ToList();
        }
        public void AddCandidate(PotentialEmployee candidate)
        {
            using var context = new EmployeeDataContext(_connectionString);
            context.PotentialEmployee.Add(candidate);
            context.SaveChanges();
        }
        public void UpdateCandidateStatus(PotentialEmployee candidate)
        {
            using var context = new EmployeeDataContext(_connectionString);
            context.PotentialEmployee.FirstOrDefault(c => c.Id == candidate.Id).Status = candidate.Status;
            context.SaveChanges();
        }
        public PotentialEmployee GetById(int id)
        {
            using var context = new EmployeeDataContext(_connectionString);
            return context.PotentialEmployee.FirstOrDefault(p => p.Id == id);
        }
        public CandidateCounts GetCounts()
        {
            using var context = new EmployeeDataContext(_connectionString);
            return new CandidateCounts
            {
                Pending = context.PotentialEmployee.Count(c => c.Status == Status.Pending),
                Hired = context.PotentialEmployee.Count(c => c.Status == Status.Hired),
                Declined = context.PotentialEmployee.Count(c => c.Status == Status.Declined),
            };
        }
    }
}
