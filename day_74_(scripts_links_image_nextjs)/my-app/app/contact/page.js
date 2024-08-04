import React from 'react'
import Script from 'next/script'
const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page");`}
      </Script>
      this is contact page
    </div>
  )
}

export default contact

export const metadata = {
  title:"Contact Facebook - Commit with the world",
  description :"this is contact page"
}