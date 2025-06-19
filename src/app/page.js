"use client";

import dynamic from "next/dynamic";

// Client Components:
const Header = dynamic(() => import("./Header"));
const VideoBanner = dynamic(() => import("./VideoBanner"));
const ProductDetails = dynamic(() => import("./ProductDetails"));
const GetInTouch = dynamic(() => import("./GetInTouch"));
const Footer = dynamic(() => import("./Footer"));

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
