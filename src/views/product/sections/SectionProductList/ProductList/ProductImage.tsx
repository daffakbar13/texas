import Image from 'next/image'
import React from 'react'

export default function ProductImage(props: { src: string }) {
  const { src } = props

  return (
    <Image
      src={src || '/'}
      alt="Product Image"
      height={96}
      width={96}
      style={{ borderRadius: 8 }}
    />
  )
}
