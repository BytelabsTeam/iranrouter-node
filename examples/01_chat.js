/**
 * چت ساده با IranRouter
 *
 * اجرا:
 *   export IRANROUTER_API_KEY=ir-...
 *   node examples/01_chat.js
 */
import "./_bootstrap.js";
import { IranRouter } from "../src/index.js";

const client = IranRouter();

const response = await client.chat.completions.create({
  model: "deepseek/deepseek-flash",
  messages: [
    { role: "user", content: "سلام! خودت را در یک جمله معرفی کن." },
  ],
});

console.log(response.choices[0].message.content);
