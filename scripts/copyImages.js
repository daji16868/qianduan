const fs = require('fs');
const path = require('path');
const https = require('https');

// Image mapping from structured JSON
const imageMapping = require('../image_mapping.json');

// Create directories if they don't exist
const createDirectories = () => {
  const dirs = [
    'public/assets',
    'public/assets/images',
    'public/assets/images/blog',
    'public/assets/images/team',
    'public/assets/images/cases',
    'public/assets/images/global'
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Download image from URL
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join('public/assets/images', filename);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`File already exists: ${filepath}`);
      resolve(filepath);
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve(filepath);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partially downloaded file
      reject(err);
    });
  });
};

// Extract and download all images
const processImages = async () => {
  try {
    // Create required directories
    createDirectories();

    // Process each page's images
    for (const [pageName, pageData] of Object.entries(imageMapping.pages)) {
      const images = [
        ...pageData.hero_images || [],
        ...pageData.content_images || [],
        ...pageData.gallery_images || [],
        ...pageData.background_images || []
      ];

      console.log(`Processing ${images.length} images for ${pageName}...`);

      // Download images in parallel
      await Promise.all(images.map(async (image) => {
        try {
          const filename = image.url.split('/').pop();
          await downloadImage(image.url, filename);
        } catch (err) {
          console.error(`Failed to process image ${image.url}:`, err);
        }
      }));
    }

    console.log('Image processing complete!');

    // Generate image mapping for components
    generateImageMapping();

  } catch (err) {
    console.error('Error processing images:', err);
    process.exit(1);
  }
};

// Generate updated image mapping for components
const generateImageMapping = () => {
  const componentMapping = {};

  // Map images to components
  for (const [pageName, pageData] of Object.entries(imageMapping.pages)) {
    componentMapping[pageName] = {
      images: {},
      thumbnails: {},
      backgrounds: {}
    };

    // Process content images
    pageData.content_images?.forEach(image => {
      const filename = image.url.split('/').pop();
      componentMapping[pageName].images[filename] = {
        path: `/assets/images/${filename}`,
        alt: image.alt_text,
        context: image.context
      };
    });

    // Process background images
    pageData.background_images?.forEach(image => {
      const filename = image.url.split('/').pop();
      componentMapping[pageName].backgrounds[filename] = {
        path: `/assets/images/${filename}`,
        alt: image.alt_text
      };
    });
  }

  // Write mapping file for components
  const mappingPath = path.join('src', 'utils', 'imageMapping.js');
  const mappingContent = `
    // Auto-generated image mapping
    export const imageMapping = ${JSON.stringify(componentMapping, null, 2)};
  `;

  fs.writeFileSync(mappingPath, mappingContent);
  console.log(`Generated component image mapping: ${mappingPath}`);
};

// Run the script
processImages().catch(console.error);