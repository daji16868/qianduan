// src/components/common/LazyImage.jsx
import React, { useState, useEffect } from 'react';
import { formatImagePath, checkImageExists, getImageDimensions, formatAltText } from '../../utils/imageUtils';

const LazyImage = ({
  src,
  alt,
  context = 'default',
  className = '',
  onLoad,
  onError,
  loading = 'lazy',
  priority = 'low'
}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const formattedPath = formatImagePath(src);
        
        if (!checkImageExists(formattedPath)) {
          throw new Error('Image not found');
        }

        setImageUrl(formattedPath);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        if (onError) onError(err);
      }
    };

    loadImage();
  }, [src, onError]);

  const dimensions = getImageDimensions(context);
  const formattedAlt = formatAltText(alt, context);

  if (error) {
    return (
      <div className="bg-gray-200 flex items-center justify-center" style={dimensions}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  const handleImageLoad = (event) => {
    if (onLoad) onLoad(event);
  };

  const handleImageError = (event) => {
    setError(new Error('Failed to load image'));
    if (onError) onError(event);
  };

  return (
    <>
      {isLoading && (
        <div className="animate-pulse bg-gray-200" style={dimensions} />
      )}
      <img
        src={imageUrl}
        alt={formattedAlt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        style={dimensions}
        loading={loading}
        fetchPriority={priority}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};

export default LazyImage;