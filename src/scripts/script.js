const data = [
  {
    image: "./src/images/turbo-jello.png",
    title: "Turbo Jello: Video SEO Booster–Jiggle",
    description: "Turbocharge Your YouTube Video's Reach 🚀 with Tailored SEO Title and description 🎯",
    url: "https://chatgpt.com/g/g-7su0OuzDm-turbo-jello-video-seo-booster-jiggle"
  },
  {
    image: "./src/images/seo-blog-content-crafter.webp",
    title: "VSO/SEO Blog Content Writer Assistant",
    description: "Creates efficient, voice search-optimized content (320-450 words) using active voice, concise language, and up-to-date SEO practices.",
    url: "https://chatgpt.com/g/g-IqhesM810-seo-blog-content-crafter"
  },

  {
    image: "./src/images/turbo-kitten.png",
    title: "Turbo Kitten: Social Media Content Booster–Pounce",
    description: "All-platform tailored social media content: engaging captions, hashtags, and more for Facebook, Twitter (X), LinkedIn, Instagram.",
    url: "https://chatgpt.com/g/g-NttDYFbCR-turbo-kitten-social-media-content-booster-pounce"
  },
  {
    image: "./src/images/turbo-pup.png",
    title: "Turbo Pup: Generative AI Prompt Booster–Bark",
    description: "Crafts efficient, visually descriptive AI prompts 🔥From complicated to straightforward prompts ⚡️Try it out!",
    url: "https://chatgpt.com/g/g-ZvQ4iGay6-turbo-pup-generative-ai-prompt-booster-bark"
  },
  {
    image: "./src/images/turbo-budgies.png",
    title: "Turbo Budgies",
    description: "Crafts 2-3 sentence video scripts tailored to style and length.",
    url: "https://chatgpt.com/g/g-GYyNkUDfr-turbo-budgies"
  },
  {
    image: "./src/images/turbo-lizard.png",
    title: "Turbo Lizard: Summarize Content or URL–Ribbit",
    description: "I summarize content pointedly, with facts, making it distinct from the query.",
    url: "https://chatgpt.com/g/g-WGLow4T0L-turbo-lizard-summarize-content-or-url-ribbit"
  }
];

const cardContainer = document.getElementById("cardContainer");

// Function to create HTML elements with classes and content
function createCardElement(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (content) element.textContent = content;
  return element;
}

// Loop through data and create cards
data.forEach(item => {
  // Create the main card link element
  const cardLink = createCardElement("a", "card-link");
  cardLink.href = item.url;
  cardLink.target = "_blank";

  // Create the card element
  const card = createCardElement("div", "card");

  // Create and append the image element
  const img = createCardElement("img");
  img.src = item.image;
  img.alt = item.title; // Add alt text for accessibility
  cardLink.appendChild(img);

  // Create and append the card content
  const cardContent = createCardElement("div", "card-content");
  const title = createCardElement("h2", "card-title", item.title);
  const description = createCardElement("p", "card-description", item.description);
  cardContent.append(title, description);

  // Append card content to the link
  cardLink.appendChild(cardContent);

  // Append the link to the card
  card.appendChild(cardLink);

  // Finally, add the card to the container
  cardContainer.appendChild(card);
});
