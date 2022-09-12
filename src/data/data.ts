import { Product, useProduct } from "../context/ProductContext";

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Trebutchet",
    price: 33900,
    imageUrl: "https://i.imgur.com/ccy1u5k.jpg",
    description:
      "A trebuchet, also sometimes called a trebucket is a medieval siege engine, a weapon employed either to batter masonry or to throw projectiles over walls.",
  },
  {
    id: 2,
    title: "Bastard Sword",
    price: 375,
    imageUrl: "https://i.imgur.com/4YVyMie.jpg",
    description:
      "The bastard sword is mostly distinguished from a longsword because it has a grip long enough to allow two-handed use",
  },
  {
    id: 3,
    title: "Kabuto Helmet",
    price: 799,
    imageUrl: "https://i.imgur.com/1sB4xNu.jpg",
    description:
      "Kabuto (兜, 冑) is a type of helmet first used by ancient Japanese warriors which, in later periods, became an important part of the traditional Japanese armour worn by the samurai class and their retainers in feudal Japan.",
  },
  {
    id: 4,
    title: "Ballista",
    price: 9001,
    imageUrl: "https://i.imgur.com/Bqr69cT.jpg",
    description:
      "Ancient missile launcher designed to hurl javelins or heavy balls. ",
  },
  {
    id: 5,
    title: "Leather Brigandine",
    price: 249,
    imageUrl: "https://i.imgur.com/s2FXTbA.jpg",
    description:
      "Brigandine is a form of body armour from the Middle Ages. It is a garment typically made of leather, lined internally with small oblong steel plates riveted to the fabric.",
  },
  {
    id: 6,
    title: "Scimitar",
    price: 645,
    imageUrl: "https://i.imgur.com/cyKutnW.jpg",
    description:
      "A curved, single-edged sword of Asian, especially Eastern origin.",
  },
  {
    id: 7,
    title: "Roman Scutum",
    price: 199,
    imageUrl: "https://i.imgur.com/3mxQto5.jpg",
    description:
      "This mid 3rd century AD semi-cylindrical shield is known as a scutum and was used by legionary soldiers of the Roman Empire.",
  },
  {
    id: 8,
    title: "Tool Pouch",
    price: 9001,
    imageUrl: "https://i.imgur.com/rEQ2r0D.jpg",
    description: "A mix of useful tools for a day in the medieval times.",
  },
  {
    id: 9,
    title: "Mail Stockings",
    price: 499,
    imageUrl: "https://i.imgur.com/9wWFtYD.jpg",
    description:
      "Chain mail is a type of armour consisting of small metal rings linked together in a pattern to form a mesh.",
  },
  {
    id: 10,
    title: "Full Plate Armour",
    price: 999,
    imageUrl: "https://i.imgur.com/1k7kv13.jpg",
    description:
      "Full plate steel armour developed in Europe during the Late Middle Ages, especially in the context of the Hundred Years' War, from the coat of plates worn over mail suits during the 14th century.",
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
