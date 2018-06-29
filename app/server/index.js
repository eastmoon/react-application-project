module.exports = (app, io) => {
    // declare socket.io input/output
    function onConnection(socket){
      socket.emit("news", { hello: "world" });
      socket.on("frontend call", (data) => {
        console.log(data);
      });
    }
    io.on("connection", onConnection);
}
