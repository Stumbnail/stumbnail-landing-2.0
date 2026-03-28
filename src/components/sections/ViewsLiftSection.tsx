'use client'

import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { trackExternalLinkClick } from '@/lib/analytics'
import styles from './ViewsLiftSection.module.css'

const BASE_CTR = 2.4
const HIGH_CTR = 14.8

function sleep(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function ease(progress: number, direction: 'up' | 'down') {
  if (direction === 'up') {
    return 1 - (1 - progress) ** 3
  }

  return progress ** 3
}

type Phase = 0 | 1 | 2 | 3 | 4 | 5

export function ViewsLiftSection() {
  const [phase, setPhase] = useState<Phase>(0)
  const [ctrValue, setCtrValue] = useState(BASE_CTR)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    let cancelled = false

    const animateValue = (start: number, end: number, duration: number, direction: 'up' | 'down') =>
      new Promise<void>((resolve) => {
        let startTime = 0

        const step = (timestamp: number) => {
          if (cancelled) {
            resolve()
            return
          }

          if (!startTime) {
            startTime = timestamp
          }

          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = ease(progress, direction)
          const current = eased * (end - start) + start

          setCtrValue(Number(current.toFixed(1)))

          if (progress < 1) {
            frameRef.current = window.requestAnimationFrame(step)
          } else {
            setCtrValue(Number(end.toFixed(1)))
            resolve()
          }
        }

        frameRef.current = window.requestAnimationFrame(step)
      })

    const run = async () => {
      while (!cancelled) {
        setPhase(0)
        setCtrValue(BASE_CTR)

        await sleep(800)
        if (cancelled) break

        setPhase(1)
        await sleep(1600)
        if (cancelled) break

        setPhase(2)
        await sleep(800)
        if (cancelled) break

        setPhase(3)
        await animateValue(BASE_CTR, HIGH_CTR, 1000, 'up')
        if (cancelled) break

        await sleep(4000)
        if (cancelled) break

        setPhase(4)
        await animateValue(HIGH_CTR, BASE_CTR, 800, 'down')
        if (cancelled) break

        await sleep(400)
        if (cancelled) break

        setPhase(5)
        await sleep(400)
        if (cancelled) break

        setPhase(0)
        await sleep(1500)
      }
    }

    run()

    return () => {
      cancelled = true
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const showHistory = phase >= 1 && phase <= 5
  const showUpgrade = phase >= 2 && phase <= 4
  const showSpike = phase === 3

  return (
    <section aria-labelledby="views-lift-title" className={styles.section}>
      <div className="landing-shell">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <h2 id="views-lift-title" className={styles.title}>
              Your views don&apos;t grow by accident.
            </h2>
            <p className={styles.subheadline}>
              They change when your thumbnail does.
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

          <div className={styles.demoContainer}>
            <div
              className={[
                styles.featureCard,
                showHistory ? styles.history : '',
                showUpgrade ? styles.upgrade : '',
                showSpike ? styles.spike : '',
              ].join(' ')}
            >
              <div className={styles.thumbnailStage}>
                <div className={styles.thumbFlipper}>
                  <div className={`${styles.thumbFace} ${styles.thumbFront}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2 1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className={`${styles.thumbFace} ${styles.thumbBack}`} />
                </div>
              </div>

              <div className={styles.analyticsPanel}>
                <p className={styles.statHeader}>Click-Through Rate</p>
                <div className={styles.statRow}>
                  <p className={styles.statNum}>{ctrValue.toFixed(1)}%</p>
                  <svg className={styles.ytArrow} viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="12" fill="currentColor" />
                    <path
                      d="M12 3.5 L4.5 11 L8.5 11 L8.5 19.5 L15.5 19.5 L15.5 11 L19.5 11 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.graphArea}>
                <svg className={styles.graphSvg} viewBox="0 0 400 110" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ctrGraphGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(62,166,255,0.4)" />
                      <stop offset="100%" stopColor="rgba(62,166,255,0)" />
                    </linearGradient>
                  </defs>

                  <g className={styles.graphClip}>
                    <polygon
                      className={styles.graphFill}
                      points="0,110 0,90 40,85 80,95 120,88 160,92 200,90 220,88 240,40 270,50 300,10 340,20 400,0 400,110"
                    />
                    <path
                      className={styles.graphLine}
                      d="M0,90 L40,85 L80,95 L120,88 L160,92 L200,90 L220,88 L240,40 L270,50 L300,10 L340,20 L400,0"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
