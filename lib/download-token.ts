import { createHash, createHmac } from "node:crypto";

function getSecret() {
  const secret = process.env.DOWNLOAD_TOKEN_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("DOWNLOAD_TOKEN_SECRET is missing or too short.");
  }

  return secret;
}

export function createDownloadToken(sessionId: string) {
  const token = createHmac("sha256", getSecret())
    .update(`ebook-download:${sessionId}`)
    .digest("hex");

  return {
    token,
    tokenHash: hashDownloadToken(token),
  };
}

export function hashDownloadToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}