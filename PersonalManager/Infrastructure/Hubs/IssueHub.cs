using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace PersonalManager.Infrastructure.Hubs
{
    public interface ICallbackHub
    {
        Task NotifyTaskCreated(string userLogin, string message);
    }

    public class CallbackHub : ICallbackHub
    {
        private IHubContext<IssueHub> issueHub;

        public CallbackHub(IHubContext<IssueHub> issueHub)
        {
            this.issueHub = issueHub;
        }

        public async Task NotifyTaskCreated(string userLogin, string message)
        {
            await issueHub.Clients.All.SendAsync("IssueCreatedCallback", userLogin, message);
        }
    }

    public class IssueHub:Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

    }
}
