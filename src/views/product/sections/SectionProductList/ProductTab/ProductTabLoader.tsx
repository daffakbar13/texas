import { Box, Skeleton } from '@mui/material'
import React from 'react'

export default function ProductTabLoader() {
  return (
    <>
      {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <Box key={i}>
          <Skeleton variant="rounded" width={64} height={31} />
        </Box>
      ))}
    </>
  )
}
