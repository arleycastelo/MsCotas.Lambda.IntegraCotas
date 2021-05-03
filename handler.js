const httpClient = require('https');
const crypto = require('crypto');

const generateHashKey = (key) => {
    const UTCDate = new Date().toISOString().split("T")[0];
    const todayHash = `${key}-${UTCDate}`;
    return crypto.createHash("sha256").update(todayHash).digest("hex");
}

const integrationHandler = (event, context, callback) => {


    const hostname = process.env.COMMENTS_NOTIFICATION_HOST;
    const path = process.env.COMMENTS_NOTIFICATION_PATH;
    const port = 443;
    const apiKey = generateHashKey(process.env.COMMENTS_NOTIFICATION_API_KEY);

    var options = {
        hostname: hostname,
        path: path,
        port: port,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: "Bearer 441431b76531f0e4107300f84f6fa6e90527e72effff85a08c26bf3903af61a9"
        }
    };

    const request = httpClient.request(options, (response) => {
        let body = '';

        response.setEncoding('utf8');
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => {
            if (response.headers['content-type'] === 'application/json') {
                body = JSON.parse(body);
            }
            callback(null, body);
        });

    });

    request.end();
};

exports.handler = integrationHandler;