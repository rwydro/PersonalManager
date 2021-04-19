using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Infrastructure
{
    public interface ICommandHandlerFactory
    {
        ICommandHandler<TCommand, TCommandResult> Create<TCommand, TCommandResult>(TCommand command)
            where TCommand : class where TCommandResult : class;
        void Destroy(object handler);
    }

    public interface ICommandHandler<in TCommand, TCommandResult>
    {
        Task<TCommandResult> Handle([NotNull] TCommand command);
    }

}
