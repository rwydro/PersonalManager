using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Infrastructure
{
    public interface IQueryHandlerFactory
    {
        IQueryHandler<TQuery, TQueryResult> Create<TQuery, TQueryResult>(TQuery query)
            where TQuery : class where TQueryResult : class;

        void Destroy(object handler);
    }

    public interface IQueryHandler<in TQuery, TCommandResult>
    {
        Task<TCommandResult> Handle([NotNull] TQuery query);
    }
}
