"use client";

import GetInTouch from "./GetInTouch";
import Header from "./Header";
import VideoBanner from "./VideoBanner";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";

export default function ParallaxTabs() {
  return (
    <div className="h-full w-full">
      <Header />
      <VideoBanner />
      <ProductDetails />
      <GetInTouch />
      <Footer />
    </div>
  );
}
