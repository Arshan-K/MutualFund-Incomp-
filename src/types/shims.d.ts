// Minimal shims to quiet TS errors for JS/JSX modules and CSS imports
declare module '*.css'
declare module '*.scss'

// Wildcard modules for local JSX component imports (relative paths)
declare module '*/components/*' {
  const content: any
  export default content
}

declare module '*/pages/*' {
  const content: any
  export default content
}

declare module '*/data/*' {
  const content: any
  export default content
}

// Support direct relative imports (without extension) used across the app
declare module './components/*' {
  const content: any
  export default content
}

declare module './pages/*' {
  const content: any
  export default content
}

declare module './data/*' {
  const content: any
  export default content
}
