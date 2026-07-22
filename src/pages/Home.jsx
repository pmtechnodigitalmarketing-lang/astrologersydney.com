import React, { lazy, Suspense } from "react";
import { ClassicHero } from "../components/ClassicHero";
import "./Home.css";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));

const Home = () => {
  return (
    <div className="home-container">
      <ClassicHero />
      <Suspense fallback={<div className="flex-center text-primary" style={{ minHeight: '50vh' }}>Loading...</div>}>
        <HomeBelowFold />
      </Suspense>
    </div>
  );
};

export default Home;
