'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { MAIN_NAV } from '@/config/site'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { ToggleTheme } from '../toggle-theme'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex fixed -translate-x-1/2 top-2 left-1/2 w-full max-w-3xl px-4 z-50'>
      <div className='flex justify-between items-center w-full p-3 bg-gradient-to-br from-white/5 via-transparent to-white/10 outline-1 outline-offset-2 outline-white/20 rounded-lg backdrop-blur-lg'>
        <Link href='/'>
          <h1 className='text-2xl font-extrabold text-white'>
            <span className='text-blue-500 transform rotate-12 inline-block'>
              M
            </span>
            k
          </h1>
        </Link>

        <div className='flex items-center gap-4'>
          <div className='flex flex-row select-none'>
            {MAIN_NAV.map((nav) => (
              <Link
                href={nav.href}
                key={nav.href}
                data-id={nav.href}
                className={cn(
                  'px-2 py-0.5 text-zinc-300 hover:text-zinc-200 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200 cursor-pointer text-sm',
                  pathname === nav.href && 'text-zinc-100 font-semibold'
                )}
              >
                {nav.title}
              </Link>
            ))}
          </div>

          <ToggleTheme />

          <Button size='sm' color='primary' className='text-sm'>
            Contact Me
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
