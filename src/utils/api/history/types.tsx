export interface IHistories {
  id: number;
  created_at: string;
  status: string;
  trx_name: string;
  type: string;
  amount: number;
  transaction_id?: number;
  topup_id?: number;
}
