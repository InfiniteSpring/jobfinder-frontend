import { Product } from "../../types"; // Типизация данных о продукте
import { Suspense } from "react";
import ProductCardClient from "../client/OrderCard";

async function getProductData(productId: string): Promise<Product> {
    // Моковые данные товаров
    const mockProducts: Record<string, Product> = {
      "111": {
        id: "111",
        name: "Пример названия (id:111)",
        description: "Long description for order number Long description for order number 111 Long description for order number Long description for order number 111 Long description for order number Long description for order number 111 ",
        price: 100,
        duration: '2-3ч',
        rating: 4,
        timePosted: "Сегодня 12:30",
        timeToComplete: " 12:30",
        place: "Минск, ст.м. Усход",
        imageUrl: "https://example.com/order111.jpg",
      },
      "222": {
        id: "222",
        name: "Пример названия (id:222)",
        description: "Long description for order number Long description for order number 222 Long description for order number Long description for order number 222 Long description for order number Long description for order number 222 ",
        price: 200,
        duration: '2-3ч',
        rating: 3,
        timePosted: "Сегодня 12:30",
        timeToComplete: " 12:30",
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order222.jpg",
      },
      "333": {
        id: "333",
        name: "Пример названия (id:333)",
        description: "Long description for order number Long description for order number 333 Long description for order number Long description for order number 333 Long description for order number Long description for order number 333 ",
        price: 300,
        duration: '2-3ч',
        rating: 2,
        timePosted: "Сегодня 12:30",
        timeToComplete: " 12:30",
        place: "Минск, ст.м. Усход",
        imageUrl: "https://example.com/order333.jpg",
      },
      "444": { 
        id: "444", 
        name: "Пример названия (id:444)",  
        description: "Long description for order number Long description for order number 444 Long description for order number Long description for order number 444 Long description for order number Long description for order number 444 ",   
        price: 400, 
        duration: '2-3ч',
        rating: 1, 
        timePosted: "Сегодня 12:30", 
        timeToComplete: " 12:30", 
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order444.jpg",
      },
      "555": {
        id: "555", 
        name: "Пример названия (id:555)",  
        description: "Long description for order number Long description for order number 555 Long description for order number Long description for order number 555 Long description for order number Long description for order number 555 ",    
        price: 500, 
        duration: '2-3ч',
        rating: 0, 
        timePosted: "Сегодня 12:30", 
        timeToComplete: " 12:30", 
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order555.jpg",
      },
      "666": { 
        id: "666", 
        name: "Пример названия (id:666)",  
        description: "Long description for order number Long description for order number 666 Long description for order number Long description for order number 666 Long description for order number Long description for order number 666 ",    
        price: 600, 
        duration: '2-3ч',
        rating: 0, 
        timePosted: "Сегодня 12:30", 
        timeToComplete: " 12:30", 
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order666.jpg",
      },
      "777": { 
        id: "777",
        name: "Пример названия (id:777)",  
        description: "Long description for order number Long description for order number 777 Long description for order number Long description for order number 777 Long description for order number Long description for order number 777 ",    
        price: 700, 
        duration: '2-3ч',
        rating: 0, 
        timePosted: "Сегодня 12:30", 
        timeToComplete: " 12:30", 
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order777.jpg",
      },
      "888": {
        id: "888", 
        name: "Пример названия (id:888)",  
        description: "Long description for order number Long description for order number 888 Long description for order number Long description for order number 888 Long description for order number Long description for order number 888 ",    
        price: 800, 
        duration: '2-3ч',
        rating: 0, 
        timePosted: "Сегодня 12:30", 
        timeToComplete: " 12:30", 
        place: "Минск, ст.м. Усход", 
        imageUrl: "https://example.com/order888.jpg",   
      },
    };
  
    // Возвращаем данные товара по ID или выбрасываем ошибку, если товар не найден
    const product = mockProducts[productId];
  
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }
  
    return product;
}

export default async function ProductCard({ productId }: { productId: string }) {
    try {
      const product = await getProductData(productId); // Получаем данные о товаре на сервере
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <ProductCardClient product={product} />
        </Suspense>
      );
    } catch (error) {
      return <div>Error: {error instanceof Error ? error.message : "An error occurred"}</div>;
    }
}


