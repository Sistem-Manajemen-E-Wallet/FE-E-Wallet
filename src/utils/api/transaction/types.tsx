import * as z from "zod";

export const pinSchema = z.object({
  pin: z.string().min(6, { message: "Pin is required" }),
});

export const transactionSchema = z.object({
  order_id: z.string().min(6, { message: "Order ID is required" }),
  product_id: z.string().min(6, { message: "Product ID is required" }),
  quantity: z.string().min(6, { message: "Quantity is required" }),
  additional: z.string().min(6, { message: "Additional is required" }),
});

export type TransactionType = z.infer<typeof pinSchema>;
export type CheckoutType = z.infer<typeof transactionSchema>;
