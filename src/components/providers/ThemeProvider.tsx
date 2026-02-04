'use client'

import { createContext, useContext, ReactNode, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

type ThemeListener = () => void

const themeListeners = new Set<ThemeListener>()

function subscribe(listener: ThemeListener) {
  themeListeners.add(listener)
  return () => {
    themeListeners.delete(listener)
  }
}

function getThemeSnapshot(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function notifyThemeListeners() {
  for (const listener of themeListeners) listener()
}

function applyTheme(newTheme: Theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', newTheme)
  }

  notifyThemeListeners()
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribe, getThemeSnapshot, () => 'light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    applyTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
