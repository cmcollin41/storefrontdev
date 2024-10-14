'use client'

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "@sanity/types";
import { Skeleton } from "@/components/ui/skeleton";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export default function NewsPage() {
  const [posts, setPosts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const POSTS_QUERY = `*[
          _type == "post"
          && defined(slug.current)
        ]|order(publishedAt desc){
          _id, 
          title, 
          slug, 
          publishedAt, 
          excerpt,
          mainImage
        }`;

        const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, { next: { revalidate: 30 } });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-12 w-48 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-900 mb-8">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {post.mainImage && (
              <div className="relative h-48 w-full">
                <Image
                  src={urlFor(post.mainImage).width(800).height(400).url() || ''}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  placeholder="blur"
                  blurDataURL={urlFor(post.mainImage).width(50).quality(20).blur(50).url() as string}
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <Link href={`/articles/${post.slug.current}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-green-700 transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-600 text-sm mb-3">
                {post.publishedAt instanceof Date
                  ? post.publishedAt.toLocaleDateString()
                  : typeof post.publishedAt === 'string'
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : 'Invalid date'}
              </p>
              {typeof post.excerpt === 'string' && (
                <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
              )}
              <Link href={`/articles/${post.slug?.current ?? ''}`} className="mt-auto text-green-600 hover:underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
