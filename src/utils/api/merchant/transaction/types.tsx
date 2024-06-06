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
    UserID?: number;
    ProductID?: number;
    OrderID?: number;
    Quantity?: number;
    TotalCost?: number;
    CustName?: string;
    ProductName?: string;
    StatusProgress?: string;
    Addtional?: string;
    StatusPayment?: string;
    created_at?: string;
    updated_at?: string;
  }
  