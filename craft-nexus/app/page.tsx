import CategorySection from "@/components/landing/BrowseCategories";
import FeatureBar from "@/components/organisms/FeatureBar";
import FeaturedCourses from "@/components/organisms/FeaturedCourses";
import HeroSection from "@/components/organisms/HomepageHero";
import TestimonialsSection from "@/components/organisms/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <CategorySection />
      <FeatureBar/>
      <TestimonialsSection />
       <FeaturedCourses />
    </div>

  );
}
