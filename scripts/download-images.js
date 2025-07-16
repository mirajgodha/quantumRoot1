const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

// Image mappings from external URLs to local paths
const imageMappings = [
  // Logo
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff4ea57609337402396ccbc232eb068dc?format=webp&width=800",
    localPath: "public/images/quantum-root-logo.png",
    alt: "QuantumRoot Logo",
  },

  // Testimonial images
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    localPath: "public/images/testimonials/rahul-verma.jpg",
    alt: "Rahul Verma - Data Engineer at TCS",
  },
  {
    url: "https://images.unsplash.com/photo-1617009762269-c062aaf6b3a0?w=900&auto=format&fit=crop&crop=face",
    localPath: "public/images/testimonials/priya-singh.jpg",
    alt: "Priya Singh - Database Architect at Infosys",
  },
  {
    url: "https://images.unsplash.com/photo-1662145349402-f78c521eccb0?w=900&auto=format&fit=crop&crop=face",
    localPath: "public/images/testimonials/arjun-krishnan.jpg",
    alt: "Arjun Krishnan - Search Engineer at Wipro",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?w=900&auto=format&fit=crop&crop=face",
    localPath: "public/images/testimonials/sneha-patel.jpg",
    alt: "Sneha Patel - AI Engineer at Accenture",
  },
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    localPath: "public/images/testimonials/vikram-kumar.jpg",
    alt: "Vikram Kumar - Data Architect at UHG",
  },
  {
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    localPath: "public/images/testimonials/anitha-raj.jpg",
    alt: "Anitha Raj - NoSQL Developer at Mindtree",
  },
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    localPath: "public/images/testimonials/ravi-sharma.jpg",
    alt: "Ravi Sharma - Big Data Engineer at Verizon",
  },
  {
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    localPath: "public/images/testimonials/meera-joshi.jpg",
    alt: "Meera Joshi - Search Analyst at Incedo",
  },

  // Corporate client logos
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff8fd57f3e22146669b60b75e9bd7ed9d?format=webp&width=800",
    localPath: "public/images/corporate/accenture.png",
    alt: "Accenture Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F1ecc9182c8244d918e03d2a525acd730?format=webp&width=800",
    localPath: "public/images/corporate/airtel.png",
    alt: "Airtel Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fd91ce59c05f94233920e80f8cac1b398?format=webp&width=800",
    localPath: "public/images/corporate/ceva-logistics.png",
    alt: "CEVA Logistics Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fb31bafd1e3674f5fa694f2e3e83eea84?format=webp&width=800",
    localPath: "public/images/corporate/etisalat.png",
    alt: "Etisalat Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F0e1d63706fd64eb1abe6ffcd75be6c7b?format=webp&width=800",
    localPath: "public/images/corporate/incedo.png",
    alt: "Incedo Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F0dd010d6a2114dc487cad1ce8fa546cf?format=webp&width=800",
    localPath: "public/images/corporate/infosys.png",
    alt: "Infosys Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fb707d7cc14864fc184ea4d646dc74f9a?format=webp&width=800",
    localPath: "public/images/corporate/swissgulf.png",
    alt: "SwissGulf Partners Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Fe2f0d18b63fc44ad8138c74ef40d3edc?format=webp&width=800",
    localPath: "public/images/corporate/tcs.png",
    alt: "TCS Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2Ff46782ca8aca424091933a1459fab0f9?format=webp&width=800",
    localPath: "public/images/corporate/unitedhealth.png",
    alt: "UnitedHealth Group Logo",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets%2F0564a85c933e429398df35ea14c820a0%2F19c8f306bb1048d3be79c70ea8372057?format=webp&width=800",
    localPath: "public/images/corporate/verizon.png",
    alt: "Verizon Logo",
  },
];

function downloadImage(url, localPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const parsedUrl = new URL(url);
    const client = parsedUrl.protocol === "https:" ? https : http;

    const request = client.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(localPath);
      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`Downloaded: ${url} -> ${localPath}`);
        resolve();
      });

      fileStream.on("error", reject);
    });

    request.on("error", reject);
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function downloadAllImages() {
  console.log("Starting image downloads...");

  for (const mapping of imageMappings) {
    try {
      await downloadImage(mapping.url, mapping.localPath);
    } catch (error) {
      console.error(`Failed to download ${mapping.url}:`, error.message);
    }
  }

  console.log("Image downloads completed!");

  // Create an image mapping file for easy reference
  const mappingData = {
    mappings: imageMappings.reduce((acc, mapping) => {
      acc[mapping.url] = {
        localPath: mapping.localPath.replace("public/", "/"),
        alt: mapping.alt,
      };
      return acc;
    }, {}),
  };

  fs.writeFileSync(
    "public/images/image-mappings.json",
    JSON.stringify(mappingData, null, 2),
  );
  console.log("Created image mappings file");
}

downloadAllImages().catch(console.error);
