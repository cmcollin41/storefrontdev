import { PortableText } from "@portabletext/react";
import { type SanityDocument } from "@sanity/types";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import CodeBlock from "@/components/ui/code-block";
import YouTubeEmbed from '@/components/youtube-embed';
import { Metadata } from 'next';

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
  block: {
    normal: ({ children }: { children: React.ReactNode }) => <p className="mb-4">{children}</p>,
    h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
    blockquote: ({ children }: { children: React.ReactNode }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-1">{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li className="mb-1">{children}</li>,
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
    youtubeVideo,
    "author": author->{name, image}
  }`;

  let post;
  try {
    post = await client.fetch<any>(POST_QUERY, {}, options);
  } catch (error) {
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
      {post.youtubeVideo && post.youtubeVideo.url ? (
        <YouTubeEmbed url={post.youtubeVideo.url} caption={post.youtubeVideo.caption} />
      ) : post.mainImage && (
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
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="flex justify-between items-center">
        {post.author && (
          <div className="flex items-center">
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
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="prose max-w-none">
        {post.body && <PortableText value={post.body} components={components} />}
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  
  const POST_QUERY = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    description,
    mainImage
  }`;

  const post = await client.fetch<any>(POST_QUERY, {}, options);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: urlFor(post.mainImage).width(1200).height(630).url(),
        },
      ],
    },
  };
}
