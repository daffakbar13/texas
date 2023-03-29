import { Search } from '@mui/icons-material'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => (
  <>
    <OutlinedInput
      id="outlined-adornment-password"
      // type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            <Search />
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
    <div>Hello World!</div>
  </>
)

export default Page
