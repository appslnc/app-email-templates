export const APPSTUDIO_URL = "https://xn--pps-lla.com";
export const DASHBOARD_URL = "https://xn--pps-lla.com";
export const VIEW_EMAIL_URL = "https://xn--pps-lla.com";
export const YOUTUBE_URL = "https://twitter.com/appslnc";
export const TWITTER_URL = "https://twitter.com/appslnc";
export const FACEBOOK_URL = "https://facebook.com/appslnc";
export const INSTAGRAM_URL = "https://instagram.com/appslnc";
export const LINKEDIN_URL = "https://www.linkedin.com/company/appslnc";

// Image URLs - use absolute URLs for email compatibility
export const IMAGES_BASE_URL = process.env.NODE_ENV === 'development' 
  ? "/static" // For React Email dev server - now consistent with production path
  : "https://mail.apps.care/static"; // For production emails

export const STATIC_ICON_URL = `${IMAGES_BASE_URL}/icon.webp`;
export const WELCOME_GIF_URL = `${IMAGES_BASE_URL}/welcome.gif`;
export const CONFETTI_GIF_URL = `${IMAGES_BASE_URL}/confetti.gif`;
export const DEFAULT_ICON_URL = `${IMAGES_BASE_URL}/default-Icon.png`;
export const COUNTDOWN_GIF_URL = `${IMAGES_BASE_URL}/countdown.gif`;

// Social Media Icons - PNG from static folder
export const YOUTUBE_ICON_URL = `${IMAGES_BASE_URL}/yt.png`;
export const FACEBOOK_ICON_URL = `${IMAGES_BASE_URL}/fb.png`;
export const X_ICON_URL = `${IMAGES_BASE_URL}/x.png`;
export const LINKEDIN_ICON_URL = `${IMAGES_BASE_URL}/in.png`;
export const APPS_ICON_URL = `${IMAGES_BASE_URL}/appsinc-logo.png`;
