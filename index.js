const Whatsapp = require('./function/whastapp')

exports.handler = async function (event, context, callback) {
    console.log("Event: ", event);
    var whatsapp = new Whatsapp(process.env.TOKEN, process.env.WHATSAPPID);
    var params=event.queryStringParameters;
    // var response = await whatsapp.sendMsj('573147139879', "bienvenida");
    switch (event.httpMethod) {
        case 'GET':
            this.response=params['hub.challenge'];
        
            break;
        default:
            // code
            this.response = {
                'hub_challenge': '1423162681',
                'hub_mode': 'subscribe',
                'hub_verify_token': 'metawhatsapp'
            }
            break;
    }
    console.log("Response", this.response);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            "Content-Type": 'application/json'
        },
        body: this.response
    };
}
