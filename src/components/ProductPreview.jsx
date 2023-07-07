import { Box, Image, Heading, Text, Button, Flex, useBreakpointValue } from '@chakra-ui/react'
import { CartIcon } from './CartIcon'
import imageDesktop from '../assets/image-product-desktop.jpg'
import imageMobile from '../assets/image-product-mobile.jpg'

export const ProductPreview = () => {
  const imgVariant = useBreakpointValue({
    base: imageMobile,
    md: imageDesktop
  })

  return (
    <Flex
      display='flex'
      direction={{ base: 'column', md: 'row' }}
      gap='20px'
      w={{ base: 'full', md: '620px' }}
      h={{ base: 'fit-content', md: '430px' }}
      borderRadius='8px'
      bgColor='white'
    >
      <Image
        borderTopLeftRadius='8px'
        borderTopRightRadius={{ base: '8px', md: '0' }}
        borderBottomLeftRadius={{ base: '0', md: '8px' }}
        src={imgVariant}
        alt='product'
        maxW='100%'
        maxH='100%'
      />

      <Box
        w='100%'
        padding={{ base: '1rem', md: '1.5rem' }}
      >
        <Text
          fontFamily='heading'
          textTransform='uppercase'
          color='neutral.dark-grayish-blue'
          letterSpacing='5px'
          fontSize={{ base: '13px', md: '16px' }}
        >
          Perfume
        </Text>

        <Heading
          mt='1rem'
          lineHeight={1}
          fontFamily='body'
          color='primary.dark-cyan'
          fontSize={{ base: '25px', md: '28px' }}
        >
          Gabrielle Essence Eau De Parfum
        </Heading>

        <Text
          mt='1.5rem'
          fontFamily='heading'
          color='neutral.dark-grayish-blue'
          fontSize={{ base: '15px' }}
        >
          A floral, solar and voluptuous interpretation composed
          by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </Text>

        <Flex
          mt='1.5rem'
          align='center'
          w='70%'
          justify='space-between'
        >
          <Text color='green.700' fontFamily='body' fontSize='25px'>$149.99</Text>
          <Text color='neutral.dark-grayish-blue' as='del'>$169.99</Text>
        </Flex>

        <Button
          leftIcon={<CartIcon />}
          bgColor='green.500'
          color='white'
          mt='1rem'
          w='100%'
          h='45px'
          fontFamily='heading'
          transition='.2s ease-in'
          _hover={{ bgColor: 'green.700' }}
        >
          Add to Cart
        </Button>

      </Box>
    </Flex>
  )
}
