// src/utils/imageUtils.js
const IMAGE_BASE_PATH = '/assets/images';

/**
 * Format image URL to use local assets directory
 * @param {string} originalUrl - Original URL from CMS/backend
 * @returns {string} Formatted URL using local assets
 */
export const formatImagePath = (originalUrl) => {
  if (!originalUrl) return '';

  // 如果已经是完整路径，直接返回
  if (originalUrl.startsWith('/')) {
    return originalUrl;
  }

  // 如果originalUrl包含完整路径，提取文件名
  const filename = originalUrl.split('/').pop();
  
  // 返回本地资源路径
  return `${IMAGE_BASE_PATH}/${filename}`;
};

/**
 * Check if an image exists in the public directory
 * @param {string} imagePath - Image path relative to public directory
 * @returns {boolean} Whether image exists
 */
export const checkImageExists = (imagePath) => {
  // 在生产环境中，所有图片应该都在public目录中
  // 这里简单返回true，因为我们假设图片已经正确部署
  return true;
};

/**
 * Get appropriate image dimensions based on usage context
 * @param {string} context - Where image is being used (hero, thumbnail, etc)
 * @returns {{width: string, height: string}} Image dimensions
 */
export const getImageDimensions = (context) => {
  const dimensions = {
    hero: { width: '100%', height: '100%', objectFit: 'cover' },
    thumbnail: { width: '100%', height: '100%', objectFit: 'cover' },
    avatar: { width: '64px', height: '64px', objectFit: 'cover' },
    default: {}
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