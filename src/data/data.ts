export interface Product {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}
const mockData: Product[] = [
    {
        id: "1",
        title: "Trebutchet",
        price: 339000,
        imageUrl: "https://i.imgur.com/ccy1u5k.jpg",
    },
    {
        id: "2",
        title: "Bastard Sword",
        price: 3750,
        imageUrl: "https://i.imgur.com/4YVyMie.jpg",
    },
    {
        id: "3",
        title: "Kabuto Helmet",
        price: 9001,
        imageUrl: "https://i.imgur.com/1sB4xNu.jpg",
    },
];

export default mockData;
