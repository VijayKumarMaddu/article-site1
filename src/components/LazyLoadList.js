import { useState, useRef, useEffect, useCallback } from "react";
import ArticleCard from "./ArticleCard";

export default function LazyLoadList({ articles }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < articles.length
        ) {
          setLoading(true);

          // Simulate API delay
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + 3, articles.length)
            );
            setLoading(false);
          }, 800);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, visibleCount, articles.length]
  );

  return (
    <>
      {articles.slice(0, visibleCount).map((article, index) => {
        if (index === visibleCount - 1) {
          return (
            <div ref={lastArticleRef} key={article.id}>
              <ArticleCard article={article} />
            </div>
          );
        }
        return <ArticleCard key={article.id} article={article} />;
      })}

      {loading && <p style={{ textAlign: "center" }}>Loading more...</p>}
    </>
  );
}