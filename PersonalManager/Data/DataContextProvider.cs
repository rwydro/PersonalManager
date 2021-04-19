using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Windsor;

namespace PersonalManager.Data
{
    public interface IDataContextProvider
    {
        DataContext Get();
    }

    public class DataContextProvider : IDataContextProvider
    {
        private readonly IWindsorContainer container;

        public DataContextProvider(IWindsorContainer container)
        {
            this.container = container;
        }
        public DataContext Get()
        {
            return container.Resolve<DataContext>();
        }
    }
}
