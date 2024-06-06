import { z } from "zod";

export const topUpSchema = z.object({
    amount: z.number().min(10000, { message: "Minimum top up is Rp10.000" }),
    channel_bank: z.string().nonempty({ message: "Please select a bank" }),
  });
  
export type TopUpFormType = z.infer<typeof topUpSchema>;