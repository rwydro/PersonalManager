import {
    JsonHubProtocol,
    HubConnectionBuilder
} from "@microsoft/signalr";

const startSignalR = async (store) => {
   try {
       const connection = new HubConnectionBuilder().withUrl("https://localhost:5001/taskHub").build()
       await connection.start();
       connection.on("IssueCreatedCallback", (data, message) => {
           debugger;
           store.dispatch("ISSUE_CREATED_CALLBACK")
       })
   }
   catch (e) {
       debugger;
   }
};

export default startSignalR;