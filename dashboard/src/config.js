const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5300/api";
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;

module.exports= {
    BACKEND_URL,
    HOST,
    PORT
}
