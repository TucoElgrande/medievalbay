import { Product, useProduct } from "../context/ProductContext";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Trebutchet",
    price: 33900,
    imageUrl: "https://i.imgur.com/ccy1u5k.jpg",
  },
  {
    id: 2,
    title: "Bastard Sword",
    price: 375,
    imageUrl: "https://i.imgur.com/4YVyMie.jpg",
  },
  {
    id: 3,
    title: "Kabuto Helmet",
    price: 799,
    imageUrl: "https://i.imgur.com/1sB4xNu.jpg",
  },
  {
    id: 4,
    title: "Ballista",
    price: 9001,
    imageUrl: "https://i.imgur.com/Bqr69cT.jpg",
  },
  {
    id: 5,
    title: "Leather Brigandine",
    price: 249,
    imageUrl: "https://i.imgur.com/s2FXTbA.jpg",
  },
  {
    id: 6,
    title: "Scimitar",
    price: 645,
    imageUrl: "https://i.imgur.com/cyKutnW.jpg",
  },
  {
    id: 7,
    title: "Roman Scutum",
    price: 199,
    imageUrl: "https://i.imgur.com/3mxQto5.jpg",
  },
  {
    id: 8,
    title: "Tool Pouch",
    price: 9001,
    imageUrl: "https://i.imgur.com/rEQ2r0D.jpg",
  },
  {
    id: 9,
    title: "Mail Stockings",
    price: 499,
    imageUrl: "https://i.imgur.com/9wWFtYD.jpg",
  },
  {
    id: 10,
    title: "Full Plate Armour",
    price: 999,
    imageUrl: "https://i.imgur.com/1k7kv13.jpg",
  },
];

export function getProducts() {
  const { products } = useProduct();
  return products;
}

export function getProduct(number: number) {
  const { products } = useProduct();
  return products.find((i) => i.id === number);
}

export default mockProducts;
