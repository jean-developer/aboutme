import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {defaultViewport, fadeIn, slideUp, stagger} from "../../utils/animations";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  if (!blogSection.display) {
    return null;
  }
  return (
    <motion.section
      className="main"
      id="blogs"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={fadeIn}
    >
      <motion.div className="blog-header" variants={slideUp}>
        <h1 className="blog-header-text">{blogSection.title}</h1>
        <p
          className={
            isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
          }
        >
          {blogSection.subtitle}
        </p>
      </motion.div>
      <motion.div className="blog-main-div" variants={stagger(0.16, 0.12)}>
        <motion.div className="blog-text-div" variants={stagger(0.12, 0.1)}>
          {blogSection.blogs.map((blog, i) => {
            return (
              <motion.div key={i} variants={slideUp}>
                <BlogCard
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
