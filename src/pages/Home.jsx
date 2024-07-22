import React from 'react';
import { HeroSection, CardComponent } from "../components/index.js";

const Home = () => {
    const handleAddToCart = () => {
        console.log("Added to cart");
    }
    return (
        <div>
            {/* crousal */}
            <HeroSection />
            {/*  Long Product bar */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardComponent
                    imageSrc="https://via.placeholder.com/150"
                    productName="Sample Product"
                    productPrice={29.99}
                    discountOffer="20% Off"
                    onAddToCart={handleAddToCart}
                    className="max-w-sm"
                />
                <CardComponent
                    imageSrc="https://via.placeholder.com/150"
                    productName="Sample Product"
                    productPrice={29.99}
                    discountOffer="20% Off"
                    onAddToCart={handleAddToCart}
                    className="max-w-sm"
                />
                <CardComponent
                    imageSrc="https://via.placeholder.com/150"
                    productName="Sample Product"
                    productPrice={29.99}
                    discountOffer="20% Off"
                    onAddToCart={handleAddToCart}
                    className="max-w-sm"
                />
                
            </div>
        </div>
    );
}

export default Home;
