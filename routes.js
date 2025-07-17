const express = require("express");
const Contact = require("./contactModel"); // Ensure correct path
const router = express.Router();

router.post("/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
