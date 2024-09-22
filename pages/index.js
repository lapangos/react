import { Container, Box } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg">
        <div>Hello, I&apos;m a full-stack developer based in India!</div>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lapangos
          </Heading>
          <p>Developer (Spring boot / Java / Microservices / React)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
