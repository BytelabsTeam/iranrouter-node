/**
 * تولید تصویر
 *
 * اجرا:
 *   node examples/06_images.js
 */
import "./_bootstrap.js";
import { IranRouter } from "../src/index.js";

const client = IranRouter();

const response = await client.images.generate({
  model: "openai/gpt-image-2.5-sunburst",
  prompt: "a teal fox in the desert at dusk",
  size: "1024x1024",
});

const item = response.data[0];
if (item.url) {
  console.log(item.url);
} else if (item.b64_json) {
  console.log(item.b64_json.slice(0, 80) + "…");
} else {
  console.log(item);
}
