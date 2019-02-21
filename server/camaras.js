var RtspClient = require('rtspclient').RtspClient;

var client = new RtspClient();

// details is a plain Object that includes...
// format - string
client.connect('rtsp://admin:Welcome1@192.168.4.6:554/cam/realmonitor?subtype=00&channel=9').then(function (details) {
    client.play();
}).catch(err => {
    console.log(err.stack);
});

//frame is a buffer
client.on('frame', frame => {
    console.log(frame);
});

// allows you to optionally allow for RTSP logging
// also allows for you to hook this into your own logging system easily
client.on('log', (data, direction) => {
    console.log(`${direction}:${data}`);
});