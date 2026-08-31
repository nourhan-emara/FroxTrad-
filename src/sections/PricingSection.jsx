import React from 'react'
import { pricingData } from '../assets/data'
import PricingTier from '../components/PricingTier'

function PricingSection() {
    return (
        <section className="container mx-auto py-24 px-4">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="clash-display text-5xl md:text-6xl mb-6">Choose Your
                    <span className="grad1 clash-display">Trading Plan</span>
                </h2>
    
                <p className="text-xl text-zinc-300/80">
                    Select the perfect trading plan with advanced features and competitive fees
                </p>
            </div>

            {/* Subscription Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                
                {
                    pricingData.map(({id, title, desc, price, features, popular}) => (
                        <PricingTier 
                        key={id} 
                        title={title} 
                        desc={desc} 
                        price={price} 
                        features={features} 
                        popular={popular}/>
                    ))
                }
            </div>

        </section>
    )
}

export default PricingSection