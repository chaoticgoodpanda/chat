import * as signalR from "@microsoft/signalr";

//enables two-way web chat using web sockets and Microsoft SignalR
const connection = new signalR.HubConnectionBuilder()
    //bespoke web server only for demo testing
    .withUrl("https://wiredbrainchatserver.azurewebsites.net//chathub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

export default connection;
