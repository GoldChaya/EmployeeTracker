using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace HomeworkMay24.Data
{
    public class EmployeeDataContext : DbContext
    {
        private readonly string _connectionString;

        public EmployeeDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<PotentialEmployee> PotentialEmployee { get; set; }
    }
}
