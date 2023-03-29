import { NextPage } from 'next'
import Link from 'next/dist/client/link'
import React from 'react'

const Page: NextPage = () => (
  <>
    <div>Helo World!</div>
    <Link href={{ pathname: '/[merchant]/serving-lists', query: { merchant: 'ruangtidur' } }}>
      Go To List
    </Link>
  </>
)

export default Page
