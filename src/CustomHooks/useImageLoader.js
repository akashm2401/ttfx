import { useState, useEffect } from 'react';

const useImageLoader = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    if (!imageUrls.length) {
      setLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    const handleImageError = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      return img;
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  useEffect(() => {
    if (imagesLoaded === imageUrls.length) {
      setLoaded(true);
    }
  }, [imagesLoaded, imageUrls.length]);

  return loaded;
};

export default useImageLoader;