using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PersonalManager.Migrations
{
    public partial class correctionIssueForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Issue_Users_UserForeignKey",
                table: "Issue");

            migrationBuilder.DropIndex(
                name: "IX_Issue_UserForeignKey",
                table: "Issue");

            migrationBuilder.DropColumn(
                name: "UserForeignKey",
                table: "Issue");

            migrationBuilder.AddColumn<Guid>(
                name: "AssignedUserId",
                table: "Issue",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Issue_AssignedUserId",
                table: "Issue",
                column: "AssignedUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Issue_Users_AssignedUserId",
                table: "Issue",
                column: "AssignedUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Issue_Users_AssignedUserId",
                table: "Issue");

            migrationBuilder.DropIndex(
                name: "IX_Issue_AssignedUserId",
                table: "Issue");

            migrationBuilder.DropColumn(
                name: "AssignedUserId",
                table: "Issue");

            migrationBuilder.AddColumn<Guid>(
                name: "UserForeignKey",
                table: "Issue",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Issue_UserForeignKey",
                table: "Issue",
                column: "UserForeignKey");

            migrationBuilder.AddForeignKey(
                name: "FK_Issue_Users_UserForeignKey",
                table: "Issue",
                column: "UserForeignKey",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
