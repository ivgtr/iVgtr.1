import React, { FC } from 'react'

const Container: FC = ({ children }) => {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="rounded bg-cream">{children}</div>
    </main>
  )
}

export default Container
