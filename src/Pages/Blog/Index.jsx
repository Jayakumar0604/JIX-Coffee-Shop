import React from "react";
import Back from "../../assets/Blog.jpg";
import SBackground from "../../Components/SBackground/Index";
import BlogMain from "../../Components/BlogMain/Index";

const Blog = () => {
  return (
    <>
      <SBackground
        title="Blog"
        text="Dive into the world of Jix Coffee Shop! Our blog offers a behind-the-scenes look at our journey. Read about sourcing beans, expert brewing tips, interviews with our head barista, and fun community events. Your daily dose of coffee knowledge starts here!"
        image={Back}
      />
      <BlogMain />
    </>
  );
};

export default Blog;
