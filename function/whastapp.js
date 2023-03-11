const axios = require('axios').default;
module.exports = class whatsapp {
    constructor(token,whatsappid) {
        this.TOKEN=token;
        this.WHATSAPPID=whatsappid;
    }
    async sendMsj(number) {
        try {
            const params = {
                method: 'post',
                url: 'https://graph.facebook.com/v15.0/'+this.WHATSAPPID+'/messages',
                headers: {
                    'Authorization': 'Bearer ' + this.TOKEN,
                    'Content-Type': 'application/json'
                },
                data: {
                    messaging_product: 'whatsapp',
                    to:  number,
                    type: 'template',
                    template: { "name": "bienvenida", "language": { "code": "es" } }
                }
            }
            return await axios(params);
        } catch (error) {
            console.log(error.response);
            return error;
        }
    }
}