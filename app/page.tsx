import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DealBanner from "@/components/DealBanner";
import TrendingProducts from "@/components/TrendingProducts";
import Festivals from "@/components/Festivals";
import WhyDealDuniya from "@/components/WhyDealDuniya";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <Categories />
      <DealBanner />
      <TrendingProducts />
      <Festivals />
      <WhyDealDuniya />
    </main>
  );
}