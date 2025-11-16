'use client'

import React from 'react'
import Link from 'next/link'
import { Article } from '../data/articles'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  articles: Article[]
}

const EmojiCarousel: React.FC<Props> = ({ articles }) => {
  const items = articles.slice(0, 9)
  const [index, setIndex] = React.useState(0)
  const count = items.length
  React.useEffect(() => {
    if (count === 0) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 4000)
    return () => clearInterval(id)
  }, [count])
  if (count === 0) return null

  const current = items[index]
  const href = `/${current.category.toLowerCase()}/${current.slug}`

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-2xl mx-auto h-[170px] sm:h-[180px] md:h-[190px] my-8 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full px-3"
          >
            <Link href={href} className="block">
              <div className="relative w-full">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-5 md:-translate-x-6 z-10 rounded-full w-[90px] h-[90px]"
                  style={{
                    backgroundImage: (() => {
                      const normalized = current.image?.startsWith('/') ? current.image : `/${current.image}`
                      const src = normalized || '/images/Mygamingnewslogo.png'
                      return `url(${src}?v=${current.slug})`
                    })(),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#d7f7fc'
                  }}
                />
                <div className="w-full rounded-lg bg-white dark:bg-dark-800/70 border border-gray-200 dark:border-dark-700 px-5 py-4 pl-[125px] sm:pl-[135px] md:pl-[145px]">
                  <p className="uppercase text-[20px] mt-2 text-gray-900 dark:text-white font-semibold line-clamp-1">
                    {current.title}
                  </p>
                  {current.description && (
                    <p className="text-gray-700 dark:text-gray-300 mt-1 line-clamp-2">
                      {current.description}
                    </p>
                  )}
                  {current.date && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {current.date}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default EmojiCarousel