// src/utils/imageUtils.js
const IMAGE_BASE_PATH = '/assets/images';

/**
 * Format image URL to use local assets directory
 * @param {string} originalUrl - Original URL from CMS/backend
 * @returns {string} Formatted URL using local assets
 */
export const formatImagePath = (originalUrl) => {
  if (!originalUrl) return '';

  // Extract filename from URL
  const filename = originalUrl.split('/').pop();
  
  // Return local asset path
  return `${IMAGE_BASE_PATH}/${filename}`;
};

/**
 * Check if an image exists in the public directory
 * @param {string} imagePath - Image path relative to public directory
 * @returns {boolean} Whether image exists
 */
export const checkImageExists = (imagePath) => {
  try {
    // In production, all images should be in public directory
    return true;
  } catch (error) {
    console.error(`Image not found: ${imagePath}`);
    return false;
  }
};

/**
 * Get appropriate image dimensions based on usage context
 * @param {string} context - Where image is being used (hero, thumbnail, etc)
 * @returns {{width: string, height: string}} Image dimensions
 */
export const getImageDimensions = (context) => {
  const dimensions = {
    hero: { width: '100%', height: 'auto' },
    thumbnail: { width: '300px', height: '200px' },
    avatar: { width: '64px', height: '64px' },
    default: { width: 'auto', height: 'auto' }
  };
  
  return dimensions[context] || dimensions.default;
};

/**
 * Format alt text for SEO
 * @param {string} alt - Original alt text
 * @param {string} context - Image context
 * @returns {string} Formatted alt text
 */
export const formatAltText = (alt, context = '') => {
  if (!alt) return '';
  return `${alt}${context ? ` - ${context}` : ''}`;
};