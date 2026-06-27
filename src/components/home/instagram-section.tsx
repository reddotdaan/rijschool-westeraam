"use client";

import Image from "next/image";
import { LinkButton } from "@/components/ui/link-button";
import { instagramPosts } from "@/lib/homepage-data";
import { siteConfig } from "@/lib/site-config";

export function InstagramSection() {
  const facebookEmbedSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(siteConfig.social.facebook)}&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-westeraam-blue sm:text-3xl">Onze geslaagden</h2>
          <p className="mt-3 text-gray-600">
            Volg ons op social media voor de nieuwste geslaagden —{" "}
            {siteConfig.social.instagramHashtag}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.image}
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-xs leading-snug text-white">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>

          <aside className="mx-auto w-full max-w-[340px]">
            <p className="mb-3 text-center text-sm font-medium text-gray-600 lg:text-left">
              Live updates via Facebook
            </p>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <iframe
                title="Rijschool Westeraam op Facebook"
                src={facebookEmbedSrc}
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden", width: "100%" }}
                scrolling="no"
                allow="encrypted-media"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton
            href={siteConfig.social.instagram}
            brand="blue"
            size="md"
            className="w-full sm:w-auto"
          >
            Volg {siteConfig.social.instagramHashtag} op Instagram
          </LinkButton>
          <LinkButton
            href={siteConfig.social.facebook}
            variant="outline"
            size="md"
            className="w-full sm:w-auto"
          >
            Like ons op Facebook
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
