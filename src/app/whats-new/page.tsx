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
    version: '2.1.0',
    date: 'January 18, 2026',
    title: 'Interactive Template Customization',
    description: 'Click on any template and fill in your details like images, text, and more. Everything is applied automatically.',
    changes: [
      {
        type: 'feature',
        title: 'Click-to-Customize',
        description: 'Select a template to open a customization panel with input fields for your thumbnail.',
      },
      {
        type: 'feature',
        title: 'Auto-Apply Variables',
        description: 'Your uploaded images and text are instantly applied to the template in real-time.',
      },
    ],
    icon: 'template',
  },
];

// SVG Icon for template updates
const TemplateIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const changeTypeStyles = {
  feature: {
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.3)',
    text: '#10b981',
    label: 'New Feature',
  },
};

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

      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 111, 97, 0.15), transparent)',
            pointerEvents: 'none',
          }}
        />

        {/* Decorative SVG elements */}
        <svg
          style={{
            position: 'absolute',
            top: '100px',
            left: '5%',
            opacity: 0.1,
          }}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="50" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="8 8"/>
          <circle cx="60" cy="60" r="30" stroke="var(--color-primary)" strokeWidth="2"/>
        </svg>

        <svg
          style={{
            position: 'absolute',
            top: '150px',
            right: '10%',
            opacity: 0.1,
          }}
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <rect x="10" y="10" width="60" height="60" rx="8" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="6 6"/>
          <rect x="25" y="25" width="30" height="30" rx="4" stroke="var(--color-primary)" strokeWidth="2"/>
        </svg>

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Version badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(255, 111, 97, 0.1)',
              border: '1px solid rgba(255, 111, 97, 0.2)',
              marginBottom: '24px',
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ff6f61',
              }}
            />
            <span style={{ color: '#ff6f61', fontWeight: 600, fontSize: '14px' }}>
              Latest: v2.1.0
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            What&apos;s New in{' '}
            <span style={{ color: '#ff6f61' }}>Stumbnail</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-foreground-muted)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            The latest features and improvements to Stumbnail.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px 100px',
          position: 'relative',
        }}
      >
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, rgba(255, 111, 97, 0.5), rgba(255, 111, 97, 0.1))',
            transform: 'translateX(-50%)',
          }}
          className="hidden md:block"
        />

        {/* Mobile timeline line (left side) */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, rgba(255, 111, 97, 0.5), rgba(255, 111, 97, 0.1))',
          }}
          className="md:hidden"
        />

        {changelogs.map((log, index) => (
          <div
            key={log.version}
            style={{
              position: 'relative',
              marginBottom: '60px',
            }}
          >
            {/* Timeline node */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-background)',
                border: '3px solid #ff6f61',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff6f61',
                zIndex: 2,
                boxShadow: '0 0 20px rgba(255, 111, 97, 0.3)',
              }}
              className="hidden md:flex"
            >
              {TemplateIcon}
            </div>

            {/* Mobile timeline node */}
            <div
              style={{
                position: 'absolute',
                left: '20px',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-background)',
                border: '3px solid #ff6f61',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff6f61',
                zIndex: 2,
                boxShadow: '0 0 20px rgba(255, 111, 97, 0.3)',
              }}
              className="md:hidden"
            >
              {TemplateIcon}
            </div>

            {/* Content card */}
            <div
              style={{
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 0 ? 'auto' : '0',
                width: 'calc(50% - 50px)',
                padding: '28px',
                borderRadius: '16px',
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
              className="hidden md:block"
            >
              <ChangelogContent log={log} />
            </div>

            {/* Mobile content card */}
            <div
              style={{
                marginLeft: '50px',
                padding: '24px',
                borderRadius: '16px',
                backgroundColor: 'var(--color-background-alt)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
              className="md:hidden"
            >
              <ChangelogContent log={log} />
            </div>
          </div>
        ))}

        {/* End decoration */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              padding: '12px 24px',
              borderRadius: '100px',
              backgroundColor: 'var(--color-background-alt)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-foreground-muted)',
              fontSize: '14px',
            }}
          >
            More updates coming soon...
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ChangelogContent({ log }: { log: typeof changelogs[0] }) {
  return (
    <>
      {/* Header */}
      <div style={{ marginBottom: '16px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              padding: '4px 12px',
              borderRadius: '100px',
              backgroundColor: 'rgba(255, 111, 97, 0.1)',
              color: '#ff6f61',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            v{log.version}
          </span>
          <span
            style={{
              color: 'var(--color-foreground-muted)',
              fontSize: '13px',
            }}
          >
            {log.date}
          </span>
        </div>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          {log.title}
        </h3>
        <p
          style={{
            color: 'var(--color-foreground-muted)',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}
        >
          {log.description}
        </p>
      </div>

      {/* Changes list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {log.changes.map((change, idx) => {
          const style = changeTypeStyles[change.type as keyof typeof changeTypeStyles];
          return (
            <div
              key={idx}
              style={{
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: style.bg,
                border: `1px solid ${style.border}`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: style.text,
                  }}
                >
                  {style.label}
                </span>
              </div>
              <h4
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                {change.title}
              </h4>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-foreground-muted)',
                  lineHeight: 1.5,
                }}
              >
                {change.description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
