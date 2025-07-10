import React from "react";
import Banner from "../Components/Banner/Banner";
import Newsletter from "../Components/Newsletter/NewsLetter";
import Testimonials from "../Components/Testomonial/Testimonials";
import TopAuthors from "../Components/TopAuthors/TopAuthors";
import RecentBlogs from "../Components/RecentBlogs/RecentBlogs";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>
      <TopAuthors></TopAuthors>
      <Newsletter></Newsletter>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Homepage;
