import Image from 'next/image'
import React from 'react'

export default function ProductImage(props: { src: string }) {
  const { src } = props

  return (
    <Image
      src={src || '/'}
      alt="Product Image"
      height={80}
      width={80}
      style={{ borderRadius: 8 }}
    />
  )
}
