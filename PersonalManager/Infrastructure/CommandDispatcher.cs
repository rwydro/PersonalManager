using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalManager.Infrastructure
{

    public interface ICommandDispatcher
    {
        Task<TCommandResult> Dispatch<TCommand, TCommandResult>([NotNull] TCommand command)
            where TCommand : class where TCommandResult : class;
    }
    public class CommandDispatcher:ICommandDispatcher
    {
        private ICommandHandlerFactory commandHandlerFactory;

        public CommandDispatcher(ICommandHandlerFactory commandHandlerFactory)
        {
            this.commandHandlerFactory = commandHandlerFactory;
        }

        public Task<TCommandResult> Dispatch<TCommand, TCommandResult>(TCommand command) where TCommand : class where TCommandResult : class
        {

            var commandHandler = commandHandlerFactory.Create<TCommand, TCommandResult>(command);
            try
            {
                return commandHandler.Handle(command);
            }
            finally
            {
                commandHandlerFactory.Destroy(commandHandler);
            }
        }
    }
}
