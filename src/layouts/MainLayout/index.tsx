import React from 'react'
import {
  SectionHeader,
  SectionLanguageDrawer,
  SectionMain,
  SectionMenuDrawer,
  SectionModalLogin,
} from './sections'

export default function MainLayout(props: React.PropsWithChildren) {
  const { children } = props
  return (
    <>
      <SectionHeader />
      <SectionMain>{children}</SectionMain>
      <SectionMenuDrawer />
      <SectionLanguageDrawer />
      <SectionModalLogin />
    </>
  )
}
