/**
 * فهرست مدل‌های در دسترس
 *
 * اجرا:
 *   node examples/03_models.js
 */
import "./_bootstrap.js";
import { IranRouter } from "../src/index.js";

const client = IranRouter();

const models = await client.models.list();

for (const model of models.data.slice(0, 20)) {
  console.log(model.id);
}

console.log(`\n… مجموع در این صفحه: ${models.data.length}`);
