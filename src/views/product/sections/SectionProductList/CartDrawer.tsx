export {}
// import { Box, Typography, Divider, Radio, Checkbox } from '@mui/material'
// import { TexasButton, TexasSwipeableDrawer } from '@texas/components'
// import * as React from 'react'
// import Image from 'next/image'
// import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
// import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
// import useProductStore from '@texas/utils/stores/product'
// import { useMainStorage } from '@texas/utils/storages'
// import { ProductDescriptionText } from './ProductList/ProductDescriptionText'
// import { ProductNameText } from './ProductList/ProductNameText'
// import { ProductNettText } from './ProductList/ProductNettText'
// import { ProductPriceText } from './ProductList/ProductPriceText'
// import { ProductWrapper } from './ProductList/ProductWrapper'
// import { PromoLabel } from './ProductList/PromoLabel'

// export default function CartDrawer() {
//   const { language } = useMainStorage()
//   const {
//     productList,
//     showDrawerVariant,
//     selectedServingCategory,
//     selectedServingItem,
//     openDrawerVariant,
//     closeDrawerVariant,
//     generateSelectionText,
//   } = useProductStore()
//   const selectedItem = productList[selectedServingCategory].servingItems[selectedServingItem]

//   return (
//     <TexasSwipeableDrawer
//       anchor="bottom"
//       open={Boolean(showDrawerVariant)}
//       onClose={closeDrawerVariant}
//       onOpen={() => openDrawerVariant(selectedServingCategory, selectedServingItem)}
//     >
//       <Box display="flex" flexDirection="column" overflow="hidden" gap={2} padding={2}>
//         <Typography sx={{ fontWeight: 'bold' }}>Add New Item</Typography>
//         <Box>
//           <Divider />
//           <ProductWrapper>
//             <Image
//               src={selectedItem.servingImage}
//               alt="Product Image"
//               height={96}
//               width={96}
//               style={{ borderRadius: 8 }}
//             />
//             <Box display="flex" flexDirection="column" gap={1}>
//               <ProductNameText>{selectedItem.servingName}</ProductNameText>
//               <ProductDescriptionText>{selectedItem.servingDescription}</ProductDescriptionText>
//               <Box display="flex" alignItems="center" gap={0.5}>
//                 <ProductPriceText>{selectedItem.servingPrice.toLocaleString()}</ProductPriceText>
//                 <ProductNettText>{selectedItem.servingNett.toLocaleString()}</ProductNettText>
//                 <PromoLabel />
//               </Box>
//               <Box display="flex" justifyContent="end">
//                 <Box display="flex" alignItems="center" gap={1} color="primary.main">
//                   <RemoveCircleOutlineRoundedIcon />
//                   <Typography sx={{ fontSize: 14, fontWeight: 'bold', lineHeight: '16px' }}>
//                     1
//                   </Typography>
//                   <AddCircleOutlineRoundedIcon />
//                 </Box>
//               </Box>
//             </Box>
//           </ProductWrapper>
//         </Box>
//         <Box display="flex" flexDirection="column" gap={2} maxHeight="100%" overflow="scroll">
//           {selectedItem.variantLists.map((e, i) => {
//             const selectText = generateSelectionText(e, language)
//             const isRadio = selectText === 'Select 1' || selectText === 'Pilih 1'
//             return (
//               <React.Fragment key={i}>
//                 <Box display="flex" flexDirection="column">
//                   <Typography sx={{ fontWeight: 'bold' }}>{e.variantGroupName}</Typography>
//                   <Box display="flex" gap={2}>
//                     <Typography
//                       sx={{
//                         fontSize: 13,
//                         color: e.isHaveMinimumChoice ? 'primary.main' : 'grey.400',
//                         fontWeight: 'bold',
//                       }}
//                     >
//                       {e.isHaveMinimumChoice ? 'Required' : 'Optional'}
//                     </Typography>
//                     <Typography component="li" sx={{ fontSize: 13, color: 'grey.400' }}>
//                       {selectText}
//                     </Typography>
//                   </Box>
//                 </Box>
//                 <Box display="flex" flexDirection="column" gap={1}>
//                   {e.variantItems.map((v, idx) => (
//                     <Box key={idx} display="flex" gap={1}>
//                       <Box
//                         flexGrow={1}
//                         display="flex"
//                         justifyContent="space-between"
//                         alignItems="center"
//                         width="100%"
//                       >
//                         <Typography sx={{ fontSize: 14 }}>{v.variantName}</Typography>
//                         <Typography sx={{ fontSize: 14 }}>
//                           {v.price === 0 ? 'Free' : v.price.toLocaleString()}
//                         </Typography>
//                       </Box>
//                       {isRadio && <Radio checked={false} size="small" sx={{ padding: 0 }} />}
//                       {!isRadio && <Checkbox size="small" sx={{ padding: 0 }} />}
//                     </Box>
//                   ))}
//                 </Box>
//               </React.Fragment>
//             )
//           })}
//         </Box>
//         <TexasButton size="medium" onClick={closeDrawerVariant}>
//           Add To Cart
//         </TexasButton>
//       </Box>
//     </TexasSwipeableDrawer>
//   )
// }
