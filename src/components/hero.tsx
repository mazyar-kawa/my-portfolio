'use client'

import { useState } from 'react'
import { LazyMotion, domAnimation } from 'motion/react'
import * as motion from 'motion/react-m'
import { IconChevronDown } from '@tabler/icons-react'
import { Button } from './ui/button'
import ValeBackground from './vale'
import { USER } from '@/features/profile/data/user'

export default function Hero() {
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  return (
    <LazyMotion features={domAnimation}>
      <header className='relative isolate'>
        <motion.div
          className='w-full h-full absolute -z-10 left-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ValeBackground speed={isLogoHovered ? 1.0 : 0.4} />
        </motion.div>

        <div className='container max-w-3xl flex flex-col justify-end h-dvh pb-8 pt-4'>
          <motion.div
            className='mt-8 space-y-4 text-center justify-self-end'
            initial={{ opacity: 0.5, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
          >
            <div>
              <p className='capitalize text-3xl text-white'>{`${USER.firstName} ${USER.lastName}`}</p>
              <p className='capitalize text-zinc-300'>{USER.jobTitle}</p>
            </div>
            <p className='leading-relaxed text-md md:text-lg text-zinc-200'>
              {USER.about}
            </p>

            <Button
              aria-label='view work eperience'
              variant='ghost'
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              onClick={() => {
                const element = document.getElementById('experiences-wrapper')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className='text-white'
            >
              Work Experience{' '}
              <span>
                <IconChevronDown />
              </span>
            </Button>
          </motion.div>
        </div>
      </header>
    </LazyMotion>
  )
}
