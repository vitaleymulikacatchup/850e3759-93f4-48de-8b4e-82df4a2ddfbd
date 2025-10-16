"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import ButtonTextStagger from '@/components/button/ButtonTextStagger/ButtonTextStagger';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/5827871/pexels-photo-5827871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A person in a black leather jacket, holding a laptop, stands among fallen autumn leaves." },
  { "id": "product-shirt", "url": "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mature man in professional attire smiling in an office setting." },
  { "id": "product-suit", "url": "https://images.pexels.com/photos/27498889/pexels-photo-27498889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Groom in blue suit holding a white rose boutonniere, outdoors, summer." },
  { "id": "product-jacket", "url": "https://images.pexels.com/photos/5827871/pexels-photo-5827871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A person in a black leather jacket, holding a laptop, stands among fallen autumn leaves." },
];

export default function Home() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nanzi Apparel"
          buttonText="Shop Now"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Modern Men's Fashion"
            description="Discover the latest trends in men's apparel."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[{ text: "Explore Collection", href: "products" }]}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Quality", description: "Only the finest materials." , icon: 'CheckCircle' },
              { title: "Style", description: "Latest trends in fashion.", icon: 'Star' }
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            className="bg-blue-50"
            contentClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "Nanzi", name: "Classic Shirt", price: "$40", rating: 5, reviewCount: "230", imageSrc: assetMap.find(a => a.id === 'product-shirt')?.url },
              { id: "2", brand: "Nanzi", name: "Tailored Suit", price: "$200", rating: 4, reviewCount: "150", imageSrc: assetMap.find(a => a.id === 'product-suit')?.url },
              { id: "3", brand: "Nanzi", name: "Stylish Jacket", price: "$120", rating: 4, reviewCount: "180", imageSrc: assetMap.find(a => a.id === 'product-jacket')?.url }
            ]}
            className="bg-blue-50"
            textBoxTitleClassName="text-blue-900"
            textBoxDescriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="We would love to hear from you. Reach out to us anytime."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            className="bg-blue-50"
            titleClassName="text-blue-900"
            descriptionClassName="text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] },
              { title: "Help", items: [{ label: "Customer Service", href: "contact" }, { label: "Returns", href: "policy" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "policy" }, { label: "Terms & Conditions", href: "terms" }] }
            ]}
            copyrightText="© 2025 Nanzi Apparel"
            className="bg-blue-50"
            logoClassName="text-blue-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
