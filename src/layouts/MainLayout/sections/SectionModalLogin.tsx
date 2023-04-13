import { Dialog, TextField, Typography, InputAdornment, Box } from '@mui/material'
import { TexasButton } from '@texas/components'
import { useMainStore } from '@texas/utils/stores'
import React from 'react'

export default function SectionModalLogin() {
  const { contentWidth, isLoginModalOpen, closeLoginModal } = useMainStore()
  const { isSignInMode, switchSignInMode } = useMainStore()

  return (
    <Dialog
      open={isLoginModalOpen}
      onClose={closeLoginModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: { width: contentWidth - 56, margin: 'auto', padding: 3, gap: 2, borderRadius: 2 },
      }}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
        {/* {isSignInMode() ? 'Sign In' : 'Sign Up'} */}
        Your Phone Number
      </Typography>
      {!isSignInMode() && (
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>Full Name</Typography>
          <TextField variant="outlined" fullWidth size="small" />
        </Box>
      )}
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>Phone Number</Typography>
        <TextField
          variant="outlined"
          fullWidth
          type="tel"
          autoComplete="tel-62"
          size="small"
          InputProps={{ startAdornment: <InputAdornment position="start">+62</InputAdornment> }}
        />
      </Box>
      <Typography
        sx={{ fontSize: 14, color: 'primary.main', cursor: 'pointer' }}
        onClick={switchSignInMode}
      >
        {isSignInMode() ? "Have'nt" : 'Have'} account?
      </Typography>
      <Box display="flex" justifyContent="end" gap={1}>
        <TexasButton size="medium" variant="outlined" onClick={closeLoginModal}>
          Close
        </TexasButton>
        <TexasButton size="medium" onClick={closeLoginModal} autoFocus>
          {isSignInMode() ? 'Sign In' : 'Sign Up'}
        </TexasButton>
      </Box>
    </Dialog>
  )
}
