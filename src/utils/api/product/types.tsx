export interface ProductResponse {
  message: string;
  meta: Meta;
  data: Daum[];
}

export interface Meta {
  limit: number;
  page: number;
  total_items: number;
  total_pages: number;
}

export interface Daum {
  id?: number;
  user_id?: number;
  merchant_name?: string;
  product_name?: string;
  description?: string;
  price?: number;
  product_images?: string;
  created_at?: string;
  updated_at?: string;
}
