import { Providers } from '@/components/providers'
import { META_THEME_COLORS, SITE_INFO } from '@/config/site'
import { USER } from '@/features/profile/data/user'
import '@/styles/globals.css'
import { fontMono, fontSans } from '@/utils/lib/fonts'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: '/',
  },
  title: {
    template: `%s – ${SITE_INFO.name}`,
    default: `${USER.displayName} – ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: 'Mazyar Kawa',
      url: SITE_INFO.url,
    },
  ],

  creator: 'mazyar',
  openGraph: {
    siteName: SITE_INFO.name,
    url: '/',
    type: 'profile',
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@mazyar_kawa', // Twitter username
    images: [SITE_INFO.ogImage],
  },
  manifest: '/manifest.json',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: META_THEME_COLORS.light,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
