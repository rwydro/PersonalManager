using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace PersonalManager.Infrastructure.Hubs
{
    public interface ITaskHub
    {
        Task NotifyTaskCreated(string userLogin, string message);
    }

    public class Callbackhub : ITaskHub
    {
        private IHubContext<TaskHub> issueHub;

        public Callbackhub(IHubContext<TaskHub> issueHub)
        {
            this.issueHub = issueHub;
        }

        public async Task NotifyTaskCreated(string userLogin, string message)
        {
            await issueHub.Clients.All.SendAsync("IssueCreatedCallback", userLogin, message);
        }
    }

    public class TaskHub:Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        // public async Task NotifyTaskCreated(string userLogin, string message)
        // {
        //     await Clients.All.SendAsync("IssueCreatedCallback", userLogin, message);
        // }
    }
}
