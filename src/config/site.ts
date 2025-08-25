import { USER } from '@/features/profile/data/user'
import { NavItem } from '@/types'

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || 'https://mazyar.dev',
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
}

export const MAIN_NAV: NavItem[] = [
  {
    title: 'Daifolio',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Components',
    href: '/components',
  },
]

export const UTM_PARAMS = {
  utm_source: 'mazyar.dev',
  utm_medium: 'portfolio_website',
  utm_campaign: 'referral',
}
