import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import CodeBlock from "@/components/ui/code-block";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const options = { next: { revalidate: 30 } };

const components = {
  types: {
    code: CodeBlock,
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).width(800).url()}
        alt={value.alt || ' '}
        width={800}
        height={value.height || 600}
        className="my-4 rounded-md"
      />
    ),
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  
  if (!slug) {
    return <div>Slug is missing</div>;
  }

  const POST_QUERY = `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    "author": author->{name, image}
  }`;

  let post;
  try {
    post = await client.fetch<SanityDocument>(POST_QUERY, {}, options);
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/articles" className="text-green-700 hover:underline">
        ← back to articles
      </Link>
      {post.mainImage && (
        <div className="relative w-full aspect-video">
          <Image
            src={urlFor(post.mainImage).width(800).height(450).url()}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-xl"
          />
        </div>
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      {post.author && (
        <div className="flex items-center mb-4">
          {post.author.image && (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
          )}
          <span className="text-gray-600 font-sans">By {post.author.name}</span>
        </div>
      )}
      <p className="text-gray-600 mb-8">
        Published: {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose max-w-none">
        {post.body && <PortableText value={post.body} components={components} />}
      </div>
    </main>
  );
}
