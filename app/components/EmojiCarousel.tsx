'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Article } from '../data/articles'

interface Props {
  articles: Article[]
}

const EmojiCarousel: React.FC<Props> = ({ articles }) => {
  const items = articles.slice(0, 9)
  const [index, setIndex] = React.useState(0)
  const count = items.length

  if (count === 0) return null

  const current = items[index]
  const href = `/${current.category.toLowerCase()}/${current.slug}`
  const currentImage = current.image?.startsWith('/') ? current.image : `/${current.image}`
  const previousItem = () => setIndex((value) => (value - 1 + count) % count)
  const nextItem = () => setIndex((value) => (value + 1) % count)

  return (
    <div className="w-full flex justify-center">
      <div className="relative my-4 flex min-h-[172px] w-full max-w-3xl flex-col justify-center sm:my-5 sm:h-[166px] sm:min-h-0 md:h-[172px]">
        <div className="absolute w-full px-2">
          <Link href={href} prefetch={false} className="block">
            <div className="relative w-full">
              <div className="absolute left-0 top-1/2 z-10 h-[64px] w-[64px] -translate-x-1 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[#120f1c] shadow-[0_12px_36px_rgba(0,0,0,0.3)] sm:h-[82px] sm:w-[82px] sm:-translate-x-4 md:-translate-x-5">
                <Image
                  src={currentImage || '/images/pet.png'}
                  alt={current.title}
                  fill
                  sizes="82px"
                  className="object-cover"
                />
              </div>
              <div className="mgn-panel w-full rounded-[1.5rem] px-4 py-4 pl-[72px] shadow-[0_18px_54px_rgba(0,0,0,0.14)] sm:px-5 sm:py-4 sm:pl-[112px] md:pl-[122px]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.22em] text-fuchsia-200/80">
                      Fast Feed
                    </div>
                    <p className="mgn-text-strong mt-1.5 line-clamp-2 text-[15px] font-black uppercase tracking-[0.03em] sm:line-clamp-1 sm:text-lg">
                      {current.title}
                    </p>
                  </div>
                  {count > 1 && (
                    <div className="hidden items-center gap-2 sm:flex">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault()
                          previousItem()
                        }}
                        className="mgn-control-surface grid h-8 w-8 place-items-center rounded-full transition-colors duration-200"
                        aria-label="Previous item"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault()
                          nextItem()
                        }}
                        className="mgn-control-surface grid h-8 w-8 place-items-center rounded-full transition-colors duration-200"
                        aria-label="Next item"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
                {current.description && (
                  <p className="mgn-text-soft mt-1.5 line-clamp-2 text-xs leading-5 sm:text-sm">
                    {current.description}
                  </p>
                )}
                {current.date && (
                  <p className="mgn-text-faint mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {current.date}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmojiCarousel
