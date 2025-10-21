ALTER TABLE "users" ADD COLUMN "emailVerified" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "email_verified";