import { useState, useEffect } from "react";
import { ImageOff } from "lucide-react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&q=80&w=800&fit=crop", // A neutral "image not found" style unsplash image
  className,
  containerClassName,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
    setLoading(true);
  }, [src]);

  const handleError = () => {
    if (!error) {
      setImgSrc(fallbackSrc);
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {loading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin" />
        </div>
      )}
      
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onError={handleError}
          onLoad={handleLoad}
          ref={(node) => {
            if (node && node.complete && loading) {
              handleLoad();
            }
          }}
          {...props}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground gap-2">
          <ImageOff size={24} />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
      
      {error && !loading && (
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-[10px] text-muted-foreground">
          Using fallback image
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
