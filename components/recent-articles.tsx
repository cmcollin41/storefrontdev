'use client'

import React, { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "@sanity/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

interface RecentArticlesProps {
  heading?: string;
  category?: string;
}

export default function RecentArticles({ heading = "Recent Articles", category }: RecentArticlesProps) {
  const [posts, setPosts] = React.useState<SanityDocument[]>([]);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const POSTS_QUERY = `*[
          _type == "post"
          && defined(slug.current)
          ${category ? `&& "${category}" in categories[]->slug.current` : ''}
        ]|order(publishedAt desc)[0...8]{
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
  }, [category]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const SkeletonLoader = () => (
    <>
      {[...Array(4)].map((_, index) => (
        <CarouselItem key={index} className="my-4 md:basis-1/2 lg:basis-1/4 h-full">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <div className="flex justify-center mb-4 flex-grow">
              <div className="relative w-full pt-[100%] bg-gray-200 animate-pulse rounded-md"></div>
            </div>
            <div className="mt-auto">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  );

  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black tracking-wide">{heading}</h2>
          <Link href="/articles" className="text-green-700 hover:underline">VIEW ALL</Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="h-full">
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              posts.map((post) => (
                <CarouselItem key={post._id} className="my-4 md:basis-1/2 lg:basis-1/4">
                  <article className="bg-white rounded-lg shadow-md flex flex-col">
                    {post.mainImage && (
                      <div className="flex justify-center flex-grow">
                        <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
                          <Image
                            src={urlFor(post.mainImage).width(800).height(400).url()}
                            alt={post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            placeholder="blur"
                            blurDataURL={urlFor(post.mainImage).width(50).quality(20).blur(50).url()}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col h-[160px] p-4">
                      <Link href={`/articles/${post.slug.current}`} className="flex flex-col h-full justify-between">
                        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-green-700 transition-colors">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{new Date(post.publishedAt).toLocaleDateString()}</p>
                        {post.excerpt && <p className="text-gray-700 line-clamp-3 text-center">{post.excerpt}</p>}
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}