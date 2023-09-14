using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HomeworkMay24.Data.Migrations
{
    public partial class NotestoPotentialEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "PotentialEmployee",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "PotentialEmployee");
        }
    }
}
