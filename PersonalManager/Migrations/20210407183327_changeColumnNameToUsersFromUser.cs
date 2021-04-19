using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalManager.Migrations
{
    public partial class changeColumnNameToUsersFromUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameTable("User", null, "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
