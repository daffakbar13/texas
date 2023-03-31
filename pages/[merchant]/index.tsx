import { NextPage } from 'next'
import Link from 'next/dist/client/link'
import React from 'react'

const Page: NextPage = () => (
  <>
    <div>Hollo World!</div>
    <Link
      href={{
        pathname: '/[merchant]/product/[view_mode]',
        query: { merchant: 'starbucks', view_mode: 'list' },
      }}
    >
      Go To List
    </Link>
  </>
)

export default Page
