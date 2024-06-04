import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="lg">
            This is the featured article section. Highlight the most important news here.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <Text fontSize="md">
            This section contains the latest news updates. Keep your readers informed with the most recent events.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Trending Topics
          </Heading>
          <Text fontSize="md">
            This section highlights trending topics. Engage your audience with popular discussions.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;