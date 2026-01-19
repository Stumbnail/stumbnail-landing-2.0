import { Metadata } from 'next';
import { IslandHeader } from '@/components/layout/IslandHeader';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'What\'s New - Stumbnail',
  description: 'Stay up to date with the latest features and improvements to Stumbnail. See what\'s new in our thumbnail creation platform.',
};

// Changelog data
const changelogs = [
  {
    version: '2.2.0',
    date: 'January 20, 2026',
    updates: [
      'Share projects with friends via shareable links',
      'Download thumbnails directly from shared projects without an account',
    ],
  },
  {
    version: '2.1.0',
    date: 'January 18, 2026',
    updates: [
      'Click on templates to open customization panel',
      'Upload images and text that apply automatically to templates',
      'Real-time preview of customizations',
    ],
  },
];


export default function WhatsNewPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      <IslandHeader />

      {/* Header Section */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '12px',
              lineHeight: 1.2,
            }}
          >
            What&apos;s New
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-foreground-muted)',
              lineHeight: 1.6,
            }}
          >
            The latest features and improvements to Stumbnail.
          </p>
        </div>
      </section>

      {/* Updates Section */}
      <section
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px 120px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {changelogs.map((log) => (
            <div
              key={log.version}
              style={{
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '48px',
              }}
            >
              {/* Version header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ff6f61',
                  }}
                >
                  v{log.version}
                </h2>
                <span
                  style={{
                    color: 'var(--color-foreground-muted)',
                    fontSize: '0.95rem',
                  }}
                >
                  {log.date}
                </span>
              </div>

              {/* Updates list */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {log.updates.map((update, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'var(--color-foreground)',
                    }}
                  >
                    <span
                      style={{
                        color: '#ff6f61',
                        fontSize: '1.25rem',
                        lineHeight: 1,
                        marginTop: '4px',
                      }}
                    >
                      •
                    </span>
                    <span>{update}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
