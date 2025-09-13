export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Only POST requests allowed" });
    }

    const TOKEN = "6848912307:AAG9YQb232eKhrXOQFCUHJPPAg3QPS_t4iE"; // tokenni .env faylda saqlash yaxshi
    const CHAT_ID = "616200947";

    const { text } = req.body;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text
            })
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}





// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // O'zingizning token va chat_id
// const TOKEN = "6848912307:AAG9YQb232eKhrXOQFCUHJPPAg3QPS_t4iE";
// const CHAT_ID = "616200947";

// // POST /send
// app.post("/send", async (req, res) => {
//     try {
//         const { text } = req.body;

//         const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 chat_id: CHAT_ID,
//                 text: text
//             })
//         });

//         const data = await response.json();

//         if (!response.ok) {
//             // Telegramdan kelgan xatoni chiqaramiz
//             return res.status(response.status).json(data);
//         }

//         res.json(data);
//     } catch (err) {
//         console.error("Server xatosi:", err);
//         res.status(500).json({ error: err.message });
//     }
// });

// app.listen(3000, () => {
//     console.log("🚀 Server http://localhost:3000 da ishlayapti");
// });
