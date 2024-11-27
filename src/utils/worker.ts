const ports: MessagePort[] = [];
// @ts-ignore
self.onconnect = (event) => {
    const port = event.ports[0];
    ports.push(port);  // 保存连接的端口

    port.onmessage = (event) => {
        console.log('Received from client:', event.data);

        // 转发消息给所有连接的端口
        ports.forEach((connectedPort) => {
            connectedPort.postMessage(event.data);
            if (connectedPort !== port) {  // 避免发送回给发送端
            }
        });
    };
};
