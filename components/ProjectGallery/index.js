import classNames from "classnames";
import Image from "next/image";

export default function ProjectGallery({items}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items?.map((item, i) => {
            return (
              <div
                key={i}
                className={classNames("bg-gray-100 md:h-[23vw] relative rounded-[10px]", {
                  'md:col-span-2': i % 4 === 0 || i % 4 === 3, // Apply to every 4th div starting from 0 and 3
                })}
              >
                <a href={item.link} className="block w-full h-full rounded-[10px]">
                  {!!item.title && (
                    <div className="select-none absolute text-cardTitle flex-col font-CocoGothic text-milk-white top-0 left-0 z-10 bg-black/60 h-full w-full flex items-center justify-center rounded-[10px] opacity-0 hover:opacity-100 transition-all duration-[.5s] leading-none text-center px-4">{item.title}<span className="select-none font-VisbyCF text-[15px] xxl:text-[20px]">{item.type}</span></div>
                  )}
                  <Image
                    src={item.image} // Use fallback image if item.image is not provided
                    alt="portfolio item"
                    fill // Fill the parent container
                    className="hidden md:block object-cover rounded-[10px]" // Ensure the image covers the div
                  />
                  <Image
                    src={item.image} // Use fallback image if item.image is not provided
                    alt="portfolio item"
                    width={800}
                    height={800}
                    className="object-cover rounded-[10px] md:hidden" // Ensure the image covers the div
                  />
                </a>
              </div>
            );
          })}
        </div>
      );
}