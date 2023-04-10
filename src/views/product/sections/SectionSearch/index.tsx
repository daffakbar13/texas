import { Search } from '@mui/icons-material'
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import useProductStore from '@texas/utils/stores/product'
import router from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SectionSearch() {
  const { t } = useTranslation()
  const { searchKeyword, changeSearchKeyword } = useProductStore()

  return (
    <OutlinedInput
      id="outlined-adornment-password"
      size="small"
      fullWidth
      placeholder={`${t('search')}...`}
      autoComplete="off"
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" edge="end">
            <Search />
          </IconButton>
        </InputAdornment>
      }
      value={searchKeyword}
      onChange={(e) => changeSearchKeyword(e.target.value, router)}
    />
  )
}
