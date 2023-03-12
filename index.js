const Whatsapp = require('./function/whastapp')

exports.handler = async function (event, context, callback) {

    var whatsapp = new Whatsapp(process.env.TOKEN,process.env.WHATSAPPID);
    var response = await whatsapp.sendMsj('573147139879',"bienvenida");
    console.log(response);
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
