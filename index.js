const Whatsapp = require('./function/whastapp')


exports.handler = async function (event, context, callback) {
    var whatsapp = new Whatsapp(process.env.TOKEN,process.env.WHATSAPPID);
    var response = await whatsapp.sendMsj('573147139879');
    console.log(response);
}
