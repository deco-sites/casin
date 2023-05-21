import { context } from "$live/live.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  src: LiveImage;
  title: string
  description: string
}

export default function Banner({ src,description,title }: Props) {
  return (
    <section class="pt-6 pb-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap items-center -m-6">
          <div class="w-full md:w-1/2 p-6">
            <div class="p-1 mx-auto max-w-max overflow-hidden rounded-full">
              <Image
                class="object-cover rounded-full"
                src={src}
                alt=""
                width={512}
                height={512}
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-6">
            <div class="md:max-w-lg">
              <h2 class="mb-3 font-bold text-primary-dark text-4xl">
                {title}
              </h2>
              <p class="text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}