using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalManager.Migrations
{
    public partial class AddDisplayNameToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DisplayName",
                table: "User",
                type: "TEXT",
                nullable: true,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DisplayName",
                table: "User");
        }
    }
}
