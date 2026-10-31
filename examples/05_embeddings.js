/**
 * ساخت embedding
 *
 * اجرا:
 *   node examples/05_embeddings.js
 */
import "./_bootstrap.js";
import { IranRouter } from "../src/index.js";

const client = IranRouter();

const response = await client.embeddings.create({
  model: "iranrouter/demo-embed",
  input: "سلام دنیا",
});

const vector = response.data[0].embedding;
console.log(`ابعاد: ${vector.length}`);
console.log(`نمونه: ${vector.slice(0, 5).join(", ")} …`);
