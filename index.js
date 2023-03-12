const Whatsapp = require('./function/whastapp')

exports.handler = async function (event, context, callback) {
    console.log("Event: ", event);
    console.log("context: ", context);
    var whatsapp = new Whatsapp(process.env.TOKEN, process.env.WHATSAPPID);
   // var response = await whatsapp.sendMsj('573147139879', "bienvenida");
    this.response = {"hub_mode":"subscribe","hub_challenge":process.env.WHATSAPPID,"hub_verify_token":"metawhatsapp"};
    //console.log(response);
    switch (event.httpMethod) {
        case 'GET':
            this.response = {"hub_mode":"subscribe","hub_challenge":process.env.WHATSAPPID,"hub_verify_token":"metawhatsapp"};
            break;
        default:
        // code
    }
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.response)
    };
}
