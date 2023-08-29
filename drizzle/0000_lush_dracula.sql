CREATE TABLE IF NOT EXISTS "task" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"status" boolean DEFAULT false
);
