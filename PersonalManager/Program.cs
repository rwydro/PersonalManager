using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Facilities.TypedFactory;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.Resolvers.SpecializedResolvers;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Castle.Windsor.MsDependencyInjection;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using PersonalManager.Data;

namespace PersonalManager
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.UseKestrel((context, serverOptions) =>
                    {
                        serverOptions.ConfigureEndpointDefaults(options => options.Protocols = HttpProtocols.Http1);
                    });
                }).UseServiceProviderFactory(new WindsorServiceProviderFactory())
                .ConfigureContainer<WindsorContainer>(
                    (hostBuilderContext, container) =>
                    {
                        container.Kernel.Resolver.AddSubResolver(new CollectionResolver(container.Kernel));
                        container.AddFacility<TypedFactoryFacility>();

                        var skipTypes = new Type[] { typeof(DataContext) };

                        container.Register(
                            Classes
                                .FromAssemblyInThisApplication(typeof(Program).Assembly)
                                .Pick()
                                .Unless(x => skipTypes.Any(type => type.IsAssignableFrom(x)) ||
                                             x.GetInterfaces().Any() == false)
                                .WithServiceAllInterfaces()
                                .LifestyleSingleton()
                        );

                        // Execute all installers in every library in the application
                        container.Install(FromAssembly.InThisApplication(typeof(Program).Assembly));
                    }
                    );
    }
}
