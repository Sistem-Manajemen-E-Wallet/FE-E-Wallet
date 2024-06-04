export interface ResponseProfile {
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  token: string;
}
