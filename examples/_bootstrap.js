/**
 * بارگذاری .env قبل از اجرای نمونه‌ها.
 */
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");

try {
  const dotenv = await import("dotenv");
  if (existsSync(envPath)) {
    dotenv.config({ path: envPath });
  }
} catch {
  // dotenv اختیاری است؛ می‌توانید کلید را با export ست کنید
}

export { root };
