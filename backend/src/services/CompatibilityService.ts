
import { eq, and } from "drizzle-orm";
import db from "../db/index.js";
import { product_specsTable } from "../db/schema.js";








export default async function checkSocketCompatibility(cpuId: number, motherboardId: number) {

const cpuCompatibility = await db.select({
  specValue: product_specsTable.specValue
}).from(product_specsTable).where(and(eq(product_specsTable.product_id,cpuId), eq(product_specsTable.specKey,"socket")));

const motherboardCompatibility = await db.select({
  specValue: product_specsTable.specValue
}).from(product_specsTable).where(and(eq(product_specsTable.product_id,motherboardId), eq(product_specsTable.specKey,"socket")));

if(cpuCompatibility.length === 0 || motherboardCompatibility.length === 0) {
  throw new Error("CPU or Motherboard not found");
}
if(cpuCompatibility[0].specValue === motherboardCompatibility[0].specValue){
  return true

}else{
  return false
}}