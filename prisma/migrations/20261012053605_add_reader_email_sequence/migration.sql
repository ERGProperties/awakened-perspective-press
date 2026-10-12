-- AlterTable
ALTER TABLE "Reader" ADD COLUMN     "nextEmailAt" TIMESTAMP(3),
ADD COLUMN     "sequenceStep" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "unsubscribedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Reader_nextEmailAt_idx" ON "Reader"("nextEmailAt");

-- CreateIndex
CREATE INDEX "Reader_unsubscribedAt_idx" ON "Reader"("unsubscribedAt");
