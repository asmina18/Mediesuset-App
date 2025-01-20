import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";

export const MainLayout = () => {
  const [heroImage, setHeroImage] = useState(null);

  console.log(" Hero Image in MainLayout:", heroImage);

  return (
    <>
      <NavigationBar />
      <Hero setHeroImage={setHeroImage} />
      <Outlet />
      <Footer heroImage={heroImage} />
    </>
  );
};
