/// <reference types="vite/client" />

import * as React from 'react'
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    flex?: string
    grid?: string
    p?: string
    font?: string
    border?: string
    m?: string
    text?: string
  }
}
