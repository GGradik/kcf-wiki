import React from 'react';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme/BlogPostItem';
export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <>
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}>
          <div className={BlogPostContent.frontMatter.pinned ? 'news-pinned' : ''} style={{ height: '100%' }}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </div>
        </BlogPostProvider>
      ))}
    </>
  );
}
