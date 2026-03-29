'use strict'

module.exports = async (event, context) => {

    const method = event.headers["x-http-method"] || event.method || "POST"

    if (method === "OPTIONS") {
        return context
            .status(200)
            .headers({
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            })
            .succeed("")
    }

    const input = event.body || "No input"

    return context
        .status(200)
        .headers({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Content-Type": "application/json"
        })
        .succeed(JSON.stringify({
            message: "Hello from Anush Bundel 2023BCS0005 Node.js Backend!",
            input: input,
            time: new Date().toISOString()
        }))
}
