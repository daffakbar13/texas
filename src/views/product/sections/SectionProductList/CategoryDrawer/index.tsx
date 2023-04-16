import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
import { useTranslation } from 'react-i18next'
import useProductStore from '@texas/utils/stores/product'
import { Divider } from '@mui/material'
import { useTexasQuery } from '@texas/utils/hooks'

export default function CategoryDrawer() {
  const {
    isCategoryDrawerOpen,
    openCategoryDrawer,
    closeCategoryDrawer,
    onClickTabProductList,
    isActiveTab,
  } = useProductStore()
  const { t } = useTranslation()
  const productCategory = useTexasQuery('productCategory')

  return (
    <TexasSwipeableDrawer
      anchor="bottom"
      open={isCategoryDrawerOpen}
      onClose={closeCategoryDrawer}
      onOpen={openCategoryDrawer}
    >
      <Box display="flex" flexDirection="column" gap={2} padding={2}>
        <Typography sx={{ fontWeight: 'bold' }}>{t('allCategory')}</Typography>
        {productCategory.isSuccess && (
          <>
            <Box display="flex" flexDirection="column" overflow="scroll">
              {productCategory.data.categories.map((c, i, arr) => (
                <React.Fragment key={i}>
                  <Divider />
                  <Box
                    paddingTop={1}
                    paddingBottom={1}
                    {...(isActiveTab(i) && {
                      paddingLeft: 1,
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                    })}
                    sx={{ transitionDuration: '300ms' }}
                    onClick={() => onClickTabProductList(i)}
                  >
                    <Typography sx={{ fontSize: 14 }}>{c.categoryName}</Typography>
                  </Box>
                  {arr.length === i + 1 && <Divider />}
                </React.Fragment>
              ))}
            </Box>
            <TexasButton size="medium" onClick={closeCategoryDrawer}>
              {t('close')}
            </TexasButton>
          </>
        )}
      </Box>
    </TexasSwipeableDrawer>
  )
}
