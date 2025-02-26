export interface Product {
    id: string;      
    name: string;     
    description: string; 
    price: number;  
    duration: string;   
    rating: number;
    timePosted: string;
    timeToComplete?: string;
    place?: string;
    imageUrl?: string; 
  }
  