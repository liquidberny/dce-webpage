export interface Product {
  id: string;
  documentId:string;
  name: string;
  price: number;
  description: string;
  images: string;
  sizes?: string[];

}
