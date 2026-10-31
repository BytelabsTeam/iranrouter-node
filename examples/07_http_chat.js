/**
 * چت بدون OpenAI SDK — فقط fetch
 *
 * اجرا:
 *   node examples/07_http_chat.js
 */
import "./_bootstrap.js";
import { DEFAULT_BASE_URL } from "../src/index.js";

const apiKey = process.env.IRANROUTER_API_KEY;
if (!apiKey) {
  throw new Error("IRANROUTER_API_KEY ست نشده است.");
}

const baseURL = (process.env.IRANROUTER_BASE_URL || DEFAULT_BASE_URL).replace(
  /\/$/,
  ""
);

const res = await fetch(`${baseURL}/chat/completions`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "deepseek/deepseek-flash",
    messages: [{ role: "user", content: "سلام" }],
  }),
});

if (!res.ok) {
  throw new Error(`HTTP ${res.status}: ${await res.text()}`);
}

const data = await res.json();
console.log(data.choices[0].message.content);
console.log("request_id:", res.headers.get("x-request-id"));
