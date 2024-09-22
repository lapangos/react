import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'

const Website = ({ component, pageprops, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <component {...pageprops} key={router.route}></component>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
