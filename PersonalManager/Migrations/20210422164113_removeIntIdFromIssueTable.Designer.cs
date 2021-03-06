// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PersonalManager.Data;

namespace PersonalManager.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210422164113_removeIntIdFromIssueTable")]
    partial class removeIntIdFromIssueTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("PersonalManager.Data.Issue", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AssignedUserId")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("AuthorId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DeadLine")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<int>("State")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Tittle")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("AssignedUserId");

                    b.HasIndex("AuthorId");

                    b.ToTable("Issue");
                });

            modelBuilder.Entity("PersonalManager.Data.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("DisplayName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Login")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<int>("Role")
                        .HasColumnType("INTEGER");

                    b.Property<Guid>("UserIdentifier")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("PersonalManager.Data.Issue", b =>
                {
                    b.HasOne("PersonalManager.Data.User", "AssignedUser")
                        .WithMany("Issues")
                        .HasForeignKey("AssignedUserId");

                    b.HasOne("PersonalManager.Data.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId");

                    b.Navigation("AssignedUser");

                    b.Navigation("Author");
                });

            modelBuilder.Entity("PersonalManager.Data.User", b =>
                {
                    b.Navigation("Issues");
                });
#pragma warning restore 612, 618
        }
    }
}
