import { Flex } from '@chakra-ui/react'
import { ProductPreview } from './components/ProductPreview'

function App () {
  return (
    <Flex
      w='100%'
      minH='100vh'
      bgColor='primary.custom-cream'
      color='black'
      align='center'
      justify='center'
      p={{ base: '1rem', md: '0' }}
    >
      <ProductPreview />
    </Flex>
  )
}

export default App
