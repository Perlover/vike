import React from 'react'
import { Header, MobileCallToAction } from './Header'
import { Features } from './features/Features'
import { HorizontalLine, Link, Sponsors } from '@brillout/docpress'

export { Page }

function Page() {
  return (
    <>
      <GlobalNote>
        <a href="https://vite-plugin-ssr.com">
          <code>vite-plugin-ssr</code>
        </a>{' '}
        has been renamed Vike, see <a href="https://vite-plugin-ssr.com/vike">migration guide</a>.
      </GlobalNote>
      <GlobalNote>
        The <i>V1 design</i> has been released, see <Link text="migration guide" href="/migration/v1-design" />.
      </GlobalNote>
      <Header />
      <HorizontalLine primary={true} />
      <Features />
      <MobileCallToAction />
      <HorizontalLine />
      <Sponsors />
      <div style={{ height: 50 }} />
    </>
  )
}

function GlobalNote({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <blockquote style={{ marginTop: 0 }}>
          <p style={{ margin: 0 }}>{children}</p>
        </blockquote>
      </div>
    </>
  )
}
