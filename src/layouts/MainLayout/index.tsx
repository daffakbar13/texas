import React from 'react'
import { SectionHeader, SectionMain, SectionSwipeableDrawer } from './sections'

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <>
      <SectionHeader />
      <SectionMain>{children}</SectionMain>
      <SectionSwipeableDrawer />
    </>
  )
}
