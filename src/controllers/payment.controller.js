import mercadopago from 'mercadopago';

export const createOrder = async (req, res) => {

    mercadopago.configure({
        acces_token: 
        "TEST-3929551169661146-050510-6914f399644eaeb61638d43495f2e80e-1800077988",
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Laptop Lenovo",
                unite_price: 500,
                currency_id: "PEN",
                quantity: 1,
            }
        ],
        back_url: {
            success: "http://localhost:4000/success",
            failure: "http://localhost:4000/failure",
            pending: "http://localhost:4000/pending",
        },
        notification_url: "http://localhost:4000/webhook",

    })

    console.log(result)

    res.send('Creating order');
};


export const receiveWebhook = (req, res) => {
    
    res.send("webhook");

}