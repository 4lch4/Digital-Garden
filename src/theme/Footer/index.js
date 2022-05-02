import React from 'react'
import Footer from '@theme-original/Footer'

export default function FooterWrapper(props) {
  return (
    <>
      <script
        async
        src="https://ackee.4lch4.cloud/tracker.js"
        data-ackee-server="https://ackee.4lch4.cloud"
        data-ackee-domain-id="bee9cd8e-eddc-4b48-915a-d15f6adbb403"
      ></script>
      <Footer {...props} />
    </>
  )
}
