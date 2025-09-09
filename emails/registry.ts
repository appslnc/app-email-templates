// Registry of available email templates for safe dynamic loading
// Add new entries as you create more templates.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emailTemplateRegistry: Record<string, () => Promise<{ default: (props: any) => React.ReactElement }>> = {

  'general/reset-password': () => import('./General/Reset Password'),
  'general/products-promo': () => import('./General/Products Promo'),
  'app-studio/app-published': () => import('./App Studio/App Published'),
  'app-studio/app-subscribed': () => import('./App Studio/App Subscribed'),
  'app-studio/app-subscription-discount': () => import('./App Studio/App Subscription Discount'),
  'app-studio/domain-subscribed': () => import('./App Studio/Domain Subscribed'),
  'app-studio/followup-promotion': () => import('./App Studio/Followup Promotion'),
  'app-studio/promo-app-subscription': () => import('./App Studio/Promo App Subscription'),
  'app-studio/subscribe-app': () => import('./App Studio/Subscribe App'),
  'app-studio/welcome': () => import('./App Studio/Welcome'),
};

export type EmailTemplateKey = keyof typeof emailTemplateRegistry;
