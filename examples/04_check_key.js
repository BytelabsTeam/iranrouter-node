/**
 * بررسی کلید، اعتبار و سطح رایگان
 *
 * GET /api/v1/key
 *
 * اجرا:
 *   node examples/04_check_key.js
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

const res = await fetch(`${baseURL}/key`, {
  headers: { Authorization: `Bearer ${apiKey}` },
});

if (!res.ok) {
  throw new Error(`HTTP ${res.status}: ${await res.text()}`);
}

console.log(JSON.stringify(await res.json(), null, 2));
