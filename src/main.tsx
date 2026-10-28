import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './styles/global.css'
import { I18nProvider } from './i18n/useT'
import { App } from './app/App'
import { CrashGuard } from './components/Oops'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <CrashGuard>
        <App />
      </CrashGuard>
    </I18nProvider>
  </StrictMode>,
)

// Check for a new deploy on every launch and whenever the app comes back to the foreground;
// with autoUpdate the page reloads itself once the new version is ready.
registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    if (!registration) return
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') void registration.update()
    })
  },
})
