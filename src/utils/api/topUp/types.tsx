import { z } from "zod";

export const topUpSchema = z.object({
    amount: z.number().min(10000, { message: "Minimum top up is Rp10.000" }),
    channel_bank: z.string().nonempty({ message: "Please select a bank" }),
  });

export interface ItopUp {
  message: string,
  data: {
    id: number,
    order_id: string,
    user_id: number,
    amount: number,
    type: string,
    channel_bank: string,
    va_numbers: string,
    status: string,
    created_at: string,
    updated_at: string
  }
}
  
export type TopUpFormType = z.infer<typeof topUpSchema>;