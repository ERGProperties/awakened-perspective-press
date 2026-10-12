-- Records the existing Purchase table in Prisma's migration history.
-- This migration must be marked as applied, not executed against Neon.

CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "stripePaymentIntentId" TEXT,
    "email" TEXT NOT NULL,
    "productName" TEXT NOT NULL DEFAULT 'Understanding External Reflections — Instant eBook',
    "amountPaid" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'usd',
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "downloadTokenHash" TEXT,
    "downloadExpiresAt" TIMESTAMP(3),
    "emailSentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Purchase_stripeSessionId_key"
    ON "Purchase"("stripeSessionId");

CREATE UNIQUE INDEX "Purchase_stripePaymentIntentId_key"
    ON "Purchase"("stripePaymentIntentId");

CREATE UNIQUE INDEX "Purchase_downloadTokenHash_key"
    ON "Purchase"("downloadTokenHash");

CREATE INDEX "Purchase_email_idx" ON "Purchase"("email");
CREATE INDEX "Purchase_paymentStatus_idx" ON "Purchase"("paymentStatus");
CREATE INDEX "Purchase_createdAt_idx" ON "Purchase"("createdAt");