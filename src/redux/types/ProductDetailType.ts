export interface ProductDetailModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: Category[];
  relatedProducts: RelatedProduct[];
}

export interface Category {
  id: string;
  category: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
}
