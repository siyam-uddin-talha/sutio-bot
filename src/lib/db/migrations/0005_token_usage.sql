CREATE TABLE IF NOT EXISTS "TokenUsage" (
	"userId" uuid NOT NULL,
	"date" varchar(10) NOT NULL,
	"tokensUsed" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "TokenUsage_userId_date_pk" PRIMARY KEY("userId","date")
);

DO $$ BEGIN
 ALTER TABLE "TokenUsage" ADD CONSTRAINT "TokenUsage_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
