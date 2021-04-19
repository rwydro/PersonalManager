using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using PersonalManager.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using PersonalManager.Exceptions;
using PersonalManager.Infrastructure;
using Formatting = Newtonsoft.Json.Formatting;
using Task = System.Threading.Tasks.Task;

namespace PersonalManager
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers().AddNewtonsoftJson(
                x =>
                {
                    x.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                    x.SerializerSettings.Formatting = Formatting.Indented;
                    x.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    x.SerializerSettings.Converters.Add(new StringEnumConverter());
                });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PersonalManager", Version = "v1" });
            });
            services.AddDbContext<DataContext>(options =>
                options.UseSqlite(@"Data Source=database.db"));
            services.AddSignalR();
            services.AddCors();
            services.AddAuthorization(opt =>
            {
                opt.AddPolicy("RequireAdministratorRole", policy =>
                {
                    policy.RequireRole("Administrator");
                    policy.RequireAuthenticatedUser();
                });
            });

        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .SetIsOriginAllowed((host) => true)
                .AllowCredentials()
            );
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PersonalManager v1"));
            }
            app.UseExceptionHandler(new ExceptionHandlerOptions()
            {
                ExceptionHandler = async (ctx) => 
                {
                    var exc = ctx.Features.Get<IExceptionHandlerFeature>();
                    var response = ctx.Response;
                    response.ContentType = "application/json";
                    var customExcData = (IExceptionBase)exc.Error;
                    response.StatusCode = customExcData.Status; 
                    await response.WriteAsync(JsonConvert.SerializeObject(new ExceptionModel{Data = customExcData, Name = customExcData.Name}));
                }
            });
            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}"
                    );
            });
            InitializeDatabase(app).Wait();
        }

        private async Task InitializeDatabase(IApplicationBuilder app)
        {
            var dataContextProvider = app.ApplicationServices.GetService<IDataContextProvider>();
            await using var dataContext = dataContextProvider.Get();
            await dataContext.Database.MigrateAsync();
            await dataContext.SaveChangesAsync();
        }
    }
}
