type RatingProps = {
  rate: number;
  count: number;
};
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: RatingProps;
  category: string;
}
