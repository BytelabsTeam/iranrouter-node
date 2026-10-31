import OpenAI from "openai";

export const DEFAULT_BASE_URL = "https://iranrouter.net/api/v1";

/**
 * کلاینت سازگار با OpenAI برای IranRouter بسازید.
 *
 * کلید را از متغیر محیطی `IRANROUTER_API_KEY` می‌خواند
 * مگر اینکه خودتان `apiKey` بدهید.
 *
 * @param {{ apiKey?: string, baseURL?: string }} [options]
 * @returns {OpenAI}
 */
export function createClient(options = {}) {
  const apiKey = options.apiKey || process.env.IRANROUTER_API_KEY;
  if (!apiKey) {
    throw new Error(
      "کلید API پیدا نشد. " +
        "متغیر IRANROUTER_API_KEY را ست کنید یا apiKey بدهید. " +
        "کلید را از https://iranrouter.net/dashboard/keys بگیرید."
    );
  }

  const baseURL = (
    options.baseURL ||
    process.env.IRANROUTER_BASE_URL ||
    DEFAULT_BASE_URL
  ).replace(/\/$/, "");

  return new OpenAI({ apiKey, baseURL });
}

/** نام کوتاه برای import راحت‌تر */
export const IranRouter = createClient;

export default createClient;
