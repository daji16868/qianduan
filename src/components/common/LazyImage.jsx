// src/components/common/LazyImage.jsx
import React, { useState, useEffect } from 'react';
import { formatImagePath, checkImageExists, getImageDimensions, formatAltText } from '../../utils/imageUtils';

const LazyImage = ({
  src,
  alt,
  context = 'default',
  className = '',
  style = {},
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
        // 如果src已经是完整路径，则直接使用
        const formattedPath = src.startsWith('/') ? src : formatImagePath(src);
        
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
    setIsLoading(false);
    if (onLoad) onLoad(event);
  };

  const handleImageError = (event) => {
    setError(new Error('Failed to load image'));
    if (onError) onError(event);
  };

  // 合并样式
  const combinedStyle = { ...dimensions, ...style };

  return (
    <>
      {isLoading && (
        <div className="animate-pulse bg-gray-200" style={combinedStyle} />
      )}
      <img
        src={imageUrl || src} // 如果imageUrl为空，直接使用原始src
        alt={formattedAlt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        style={combinedStyle}
        loading={loading}
        fetchPriority={priority}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </>
  );
};

export default LazyImage;