import React from "react";

interface ProductVideoProps {
  srcMp4: string;
  poster: string;
  className?: string;
}

const ProductVideo: React.FC<ProductVideoProps> = ({
  srcMp4,
  poster,
  className,
}) => {
  return (
    <section className=" w-full container">
      <h2 className="font-semibold text-2xl tracking-tighter text-white mb-8">
        Product Video
      </h2>
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={srcMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default ProductVideo;
