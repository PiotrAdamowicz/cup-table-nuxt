ALTER TABLE "account" ADD COLUMN "accountId" text PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN "id";