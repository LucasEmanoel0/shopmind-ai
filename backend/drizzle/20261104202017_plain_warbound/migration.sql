CREATE TABLE "pc_build_items" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "pc_build_items_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"pc_build_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pc_builds" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "pc_builds_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pc_build_items" ADD CONSTRAINT "pc_build_items_pc_build_id_pc_builds_id_fkey" FOREIGN KEY ("pc_build_id") REFERENCES "pc_builds"("id");--> statement-breakpoint
ALTER TABLE "pc_build_items" ADD CONSTRAINT "pc_build_items_product_id_products_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id");--> statement-breakpoint
ALTER TABLE "pc_builds" ADD CONSTRAINT "pc_builds_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");