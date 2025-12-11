"use client";
import { useSlideshow } from "@/lib/slideshow";
import { slideComponents } from "@/components/slides";

function Home() {
  const { index} = useSlideshow();

  // Get current slide component
  const SlideComponent = slideComponents[index % slideComponents.length];

  return (
    <section>
      <div className="flex mx-auto ml-12">
        <div
          className="flex flex-col gap-4 justify-center sm:mt-0 items-start text-amber-50"
        >
          <SlideComponent />
        </div>
      </div>
    </section>
  );
}

export default Home;