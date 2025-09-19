export const APPSTUDIO_URL = "https://appstudio.com";
export const DASHBOARD_URL = "https://appstudio.com/dashboard";
export const VIEW_EMAIL_URL = "https://appstudio.com/view-email";
export const TWITTER_URL = "https://twitter.com/appstudio";
export const FACEBOOK_URL = "https://facebook.com/appstudio";
export const INSTAGRAM_URL = "https://instagram.com/appstudio";

// Image URLs - use absolute URLs for email compatibility
export const IMAGES_BASE_URL = process.env.NODE_ENV === 'development' 
  ? "/static" // For React Email dev server - now consistent with production path
  : "https://mail.apps.care/static"; // For production emails

export const STATIC_ICON_URL = `${IMAGES_BASE_URL}/icon.webp`;
export const WELCOME_GIF_URL = `${IMAGES_BASE_URL}/welcome.gif`;
export const CONFETTI_GIF_URL = `${IMAGES_BASE_URL}/confetti.gif`;
export const DEFAULT_ICON_URL = `${IMAGES_BASE_URL}/default-Icon.png`;

// Social Media Icons - PNG from static folder
export const YOUTUBE_ICON_URL = `${IMAGES_BASE_URL}/yt.png`;
export const FACEBOOK_ICON_URL = `${IMAGES_BASE_URL}/fb.png`;
export const X_ICON_URL = `${IMAGES_BASE_URL}/x.png`;
export const LINKEDIN_ICON_URL = `${IMAGES_BASE_URL}/in.png`;
export const APPS_ICON_URL = `${IMAGES_BASE_URL}/appsinc-logo.png`;
