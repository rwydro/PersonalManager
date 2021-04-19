using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Infrastructure
{
    public interface IQueryDispatcher
    {
        Task<TQueryResult> Dispatch<TQuery, TQueryResult>(TQuery query)
            where TQuery : class where TQueryResult : class;
    }

    public class QueryDispatcher: IQueryDispatcher
    {
        private IQueryHandlerFactory queryHandlerFactory;

        public QueryDispatcher(IQueryHandlerFactory queryHandlerFactory)
        {
            this.queryHandlerFactory = queryHandlerFactory;
        }

        public Task<TQueryResult> Dispatch<TQuery, TQueryResult>(TQuery query) where TQuery : class where TQueryResult : class
        {
            var queryHandler = queryHandlerFactory.Create<TQuery, TQueryResult>(query);
            try
            {
                return queryHandler.Handle(query);
            }
            finally
            {
                queryHandlerFactory.Destroy(queryHandler);
            }
        }
    }
}
