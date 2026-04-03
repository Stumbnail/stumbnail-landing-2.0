'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { trackExternalLinkClick } from '@/lib/analytics'
import styles from './ResultsScrollerSection.module.css'

type ScrollItem = {
  ctr: string
  direction: 'up' | 'down'
  tone: 'neutral' | 'cool' | 'highlight' | 'soft' | 'lavender'
}

const scrollerItems: ScrollItem[] = [
  {
    ctr: '2.3%',
    direction: 'down',
    tone: 'neutral',
  },
  {
    ctr: '3.1%',
    direction: 'up',
    tone: 'cool',
  },
  {
    ctr: '6.8%',
    direction: 'up',
    tone: 'highlight',
  },
  {
    ctr: '4.2%',
    direction: 'down',
    tone: 'soft',
  },
  {
    ctr: '5.0%',
    direction: 'up',
    tone: 'lavender',
  },
]

const loopItems = [...scrollerItems, ...scrollerItems]

function ArrowIcon({ direction }: { direction: 'up' | 'down' }) {
  const path =
    direction === 'up'
      ? 'M12 5L18.5 11.5H14.75V19H9.25V11.5H5.5L12 5Z'
      : 'M12 19L5.5 12.5H9.25V5H14.75V12.5H18.5L12 19Z'

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} fill="#ffffff" />
    </svg>
  )
}

export function ResultsScrollerSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const frameRef = useRef<number | null>(null)
  const selectedRef = useRef(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      return
    }

    let cancelled = false

    const updateSelected = () => {
      if (cancelled || !viewportRef.current) {
        return
      }

      const viewportRect = viewportRef.current.getBoundingClientRect()
      const viewportCenter = viewportRect.left + viewportRect.width / 2
      const maxDistance = viewportRect.width / 2

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return
        }

        const rect = item.getBoundingClientRect()
        const itemCenter = rect.left + rect.width / 2
        const distance = Math.abs(itemCenter - viewportCenter)
        const proximity = Math.max(0, 1 - distance / maxDistance)

        const scale = 0.92 + proximity * 0.12
        const opacity = 0.42 + proximity * 0.58
        const offsetY = 12 - proximity * 18

        item.style.setProperty('--item-scale', scale.toFixed(3))
        item.style.setProperty('--item-opacity', opacity.toFixed(3))
        item.style.setProperty('--item-y', `${offsetY.toFixed(2)}px`)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      if (closestIndex !== selectedRef.current) {
        selectedRef.current = closestIndex
        setSelectedIndex(closestIndex)
      }

      frameRef.current = window.requestAnimationFrame(updateSelected)
    }

    frameRef.current = window.requestAnimationFrame(updateSelected)

    return () => {
      cancelled = true
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <section aria-labelledby="results-scroller-title" className={styles.section}>
      <div className="landing-shell">
        <div className={styles.frame}>
          <div className={styles.surface}>
            <div className={styles.layout}>
              <div className={styles.copy}>
                <h2 id="results-scroller-title" className={styles.title}>
                  Better thumbnails. Better results.
                </h2>
                <p className={styles.subheadline}>
                  Create, iterate, and improve your click-through rate.
                </p>
                <ButtonLink
                  href="https://app.stumbnail.com/login"
                  variant="primary"
                  size="lg"
                  className={styles.cta}
                  onClick={() => trackExternalLinkClick('https://app.stumbnail.com/login')}
                >
                  Start here
                </ButtonLink>
              </div>

              <div className={styles.demoWrap}>
                <div className={styles.card} aria-label="Scrolling thumbnail performance illustration">
                  <div className={styles.fadeLeft} />
                  <div className={styles.fadeRight} />

                  <div ref={viewportRef} className={styles.viewport}>
                    <div className={styles.track}>
                      {loopItems.map((item, index) => {
                        const isSelected = index === selectedIndex

                        return (
                          <div
                            key={`${item.tone}-${item.ctr}-${index}`}
                            ref={(element) => {
                              itemRefs.current[index] = element
                            }}
                            className={[
                              styles.item,
                              styles[item.direction],
                              isSelected ? styles.selected : '',
                            ].join(' ')}
                          >
                            <div className={styles.ctr}>
                              <span className={styles.icon}>
                                <ArrowIcon direction={item.direction} />
                              </span>
                              <span>{item.ctr}</span>
                            </div>

                            <div className={styles.thumb}>
                              <div className={[styles.thumbMedia, styles[item.tone]].join(' ')} />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
