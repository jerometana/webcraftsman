import { client, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ParallaxScroll from "./ParallaxScroll";

// Revalidate time if you want ISR
export const revalidate = 60;

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt?: string;
  body?: any;
  mainImage?: {
    asset?: any;
    alt?: string;
    url?: string;
  };
  author?: {
    name?: string;
    bio?: string;
    image?: {
      asset?: any;
      url?: string;
    };
  };
  categories?: {
    title: string;
    slug: { current: string };
  }[];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body,
      mainImage {
        asset,
        "url": asset->url,
        alt
      },
      author-> {
        name,
        bio,
        image {
          asset,
          "url": asset->url
        }
      },
      categories[]-> {
        title,
        slug
      }
    }
  `;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function StorySlugPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1280).height(720).url()
    : "/placeholder-image.svg";

  // Use publishedAt or fallback to Sanity default _createdAt format if we had one (but we queried publishedAt)
  const dateStr = post.publishedAt || new Date().toISOString();
  const date = new Date(dateStr).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const category = post.categories?.[0]?.title || "Story";

  return (
    <main className="min-h-screen bg-bg-primary selection:bg-blue-100 selection:text-blue-900 flex flex-col items-center">
      <article className="w-full pt-32 mx-auto flex-1">
        {/* Header Section with Parallax Sticky Effect */}
        <ParallaxScroll className="w-full px-4 -z-10">
          <header className="mb-12 max-w-5xl mx-auto text-center text-text-primary">
            <span className="text-xl font-[Outfit] text-primary tracking-wider mb-8 inline-block">
              {category}
            </span>
            <h1 className="text-4xl lg:text-6xl tracking-tight mb-24 leading-tight">
              {post.title}
            </h1>
            {/* {post.excerpt && (
              <p className="text-xl text-text-secondary mb-6">{post.excerpt}</p>
            )} */}
            {/* <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-text-secondary">
              {post.author?.image?.url ? (
                <Image
                  src={post.author.image.url}
                  alt={post.author.name || "Author"}
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {post.author?.name?.[0] || "?"}
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="font-semibold text-text-primary">
                  {post.author?.name || "Anonymous"}
                </span>
                <span className="text-sm">{date}</span>
              </div>
            </div> */}
          </header>
        </ParallaxScroll>

        {/* Content Section wrapper to slide over the header */}
        <div className="w-full bg-bg-primary z-10 relative px-4 pb-32">
          {/* Feature Image */}
          {(post.mainImage?.url || post.mainImage?.asset) && (
            <div className="w-full max-w-7xl mx-auto aspect-video rounded-4xl overflow-hidden mb-12 relative bg-foreground flex items-center justify-center text-white/50 border border-gray-300">
              {post.mainImage.url ? (
                <Image
                  src={imageUrl}
                  alt={post.mainImage.alt || post.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xl">
                  Image asset loaded: {post.mainImage.alt || "No URL mapped"}
                </span>
              )}
            </div>
          )}

          {/* Content Section */}
          <div className="prose prose-lg md:prose-xl max-w-3xl mt-16 mx-auto prose-blue leading-loose text-text-secondary">
            {post.body ? (
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            ) : null}
          </div>
        </div>
      </article>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      // For content images, use a responsive approach with max width
      // Let Sanity handle the aspect ratio automatically
      const maxWidth = 1200;

      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(maxWidth).quality(90).url()}
            alt={value.alt || value.caption || "Blog post image"}
            width={maxWidth}
            height={600} // This will be adjusted by CSS to maintain aspect ratio
            className="w-full h-auto rounded-3xl mx-auto border border-gray-300"
          />
          {value.caption && (
            <p className="mt-2 text-center !text-sm text-gray-600">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    table: ({ value }: any) => (
      <div className="my-8 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              {value.rows[0]?.cells.map((cell: any, index: number) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.slice(1).map((row: any, rowIndex: number) => (
              <tr key={rowIndex} className="even:bg-gray-50">
                {row.cells.map((cell: any, cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2 text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {value.caption && (
          <p className="mt-2 text-center text-sm">{value.caption}</p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <h1 className="text-4xl text-black !mt-16 mb-4 !leading-12 scroll-mt-24">
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => {
      return (
        <h2 className="text-3xl text-black !mt-16 mb-4 !leading-12 scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return (
        <h3 className="text-2xl text-black !mt-16 mb-3 !leading-12 scroll-mt-24">
          {children}
        </h3>
      );
    },
    normal: ({ children }: any) => (
      <p className="mb-8 text-2xl leading-loose font-normal">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary text-2xl pl-6 py-4 my-12">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-primary hover:text-primary-hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="text-black font-medium">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-8">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-8">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="mb-2 leading-12 text-2xl font-normal">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="mb-2 leading-12 text-2xl font-normal">{children}</li>
    ),
  },
};
