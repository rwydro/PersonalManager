using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Facilities.TypedFactory;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using PersonalManager.Data;

namespace PersonalManager.Infrastructure
{
    public class ComponentInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<ICommandHandlerFactory>().AsFactory());
            container.Register(Component.For<IQueryHandlerFactory>().AsFactory());
        }
    }
}
