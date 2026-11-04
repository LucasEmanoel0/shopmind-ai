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
export const cartTable = pgTable("cart", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer().notNull().references(() => usersTable.id).unique(),
createdAt: timestamp().notNull().defaultNow(), })


export const cartItemsTable = pgTable("cart_items", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cart_id: integer().notNull().references(() => cartTable.id),
    product_id: integer().notNull().references(() => productsTable.id),
     quantity: integer().notNull().default(1),
    createdAt: timestamp().notNull().defaultNow(),
})

export const ordersTable = pgTable("orders", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer().notNull().references(() => usersTable.id),
    total_amount: numeric({ precision: 10, scale: 2 }).notNull(),
    status: varchar({ length: 50 }).notNull().default('pending'),
    createdAt: timestamp().notNull().defaultNow(),
})

export const orderItemsTable = pgTable("order_items", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    order_id: integer().notNull().references(() => ordersTable.id),
    product_id: integer().notNull().references(() => productsTable.id),
    quantity: integer().notNull().default(1),
    unit_price: numeric({ precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
})

export const paymentsTable = pgTable("payments", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    order_id: integer().notNull().references(() => ordersTable.id),
    amount: numeric({ precision: 10, scale: 2 }).notNull(),
    payment_method: varchar({ length: 50 }).notNull(),
    status: varchar({ length: 50 }).notNull().default('pending'),
    createdAt: timestamp().notNull().defaultNow(),
})
