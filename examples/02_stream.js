/**
 * چت با استریم (SSE)
 *
 * اجرا:
 *   node examples/02_stream.js
 */
import "./_bootstrap.js";
import { IranRouter } from "../src/index.js";

const client = IranRouter();

const stream = await client.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [
    { role: "user", content: "سه نکته کوتاه درباره Node.js بگو." },
  ],
  stream: true,
});

for await (const chunk of stream) {
  const delta = chunk.choices[0]?.delta?.content;
  if (delta) {
    process.stdout.write(delta);
  }
}

process.stdout.write("\n");
