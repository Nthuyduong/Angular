//DTO//
export interface IMenu {
  id: number;
  name: string;
  icon: string;
}

export interface IFoodMenu {
  message: string;
  data: IMenu[];
}

export interface ICart{
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

