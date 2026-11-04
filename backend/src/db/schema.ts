import { integer, numeric, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";



export const categoriesTable = pgTable("categories", { 
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    slug: varchar({ length: 255 }).notNull().unique(),
})


export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: numeric({ precision: 10, scale: 2 }).notNull(),
  description: text().notNull(),
  stock: integer().notNull().default(0),
  createdAt: timestamp().notNull().defaultNow(),
  categoryId: integer().notNull().references(() => categoriesTable.id),
});


export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    passwordHash: varchar({ length: 255 }).notNull(),
    role: varchar({ length: 50 }).notNull().default('user'),
    createdAt: timestamp().notNull().defaultNow(),
    });


export const product_specsTable = pgTable("product_specs", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    product_id: integer().notNull().references(() => productsTable.id),
    specKey: varchar({ length: 255 }).notNull(),
    specValue: varchar({ length: 255 }).notNull(),
})