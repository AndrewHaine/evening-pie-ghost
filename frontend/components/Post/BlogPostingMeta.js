import Head from "next/head";
import { format } from "date-fns";

const BlogPostingMeta = props => {
  const p = props.postData,
    a = props.author;

  const datetime_format = "y-MM-dd'T'HH:mm:ssxxx",
    published_datetime = format(p.published_at, datetime_format),
    updated_datetime = format(p.updated_at, datetime_format);

  const blogposting_schema = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    image: p.feature_image,
    datePublished: published_datetime,
    dateModified: updated_datetime,
    author: a.name,
    timeRequired: `PT${props.readTime.minutes}M`,
    author: { "@type": "Person", name: a.name, url: a.website },
    publisher: {
      "@type": "Organization",
      name: "Evening Pie",
      url: "https://eveningpie.com",
      logo: {
        "@type": "ImageObject",
        url: "https://eveningpie.com/static/logo/eveningpie-white-text.svg"
      }
    },
    mainEntityOfPage: typeof window !== "undefined" && window.location.href
  };

  return (
    <Head>
      <title>{p.meta_title || p.title}</title>
      <meta name="description" content={p.meta_description || ""} />
      <meta name="author" content={a.name} />
      <meta
        property="og:title"
        content={p.og_title || p.meta_title || p.title}
      />
      <meta
        property="og:description"
        content={p.og_description || p.meta_description || ""}
      />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={p.og_image || p.feature_image} />
      <meta property="article:author" content={a.name} />
      <meta property="article:published_time" content={published_datetime} />
      <meta property="article:modified_time" content={updated_datetime} />
      <meta name="twitter:card" content="summary_large_image" />
      {p.twitter_title && (
        <meta name="twitter:title" content={p.twitter_title} />
      )}
      {p.twitter_description && (
        <meta name="twitter:description" content={p.twitter_description} />
      )}
      <meta
        name="twitter:image"
        content={p.twitter_image || p.og_image || p.feature_image}
      />

      <script type="application/ld+json">
        {JSON.stringify(blogposting_schema)}
      </script>
    </Head>
  );
};

export default BlogPostingMeta;
