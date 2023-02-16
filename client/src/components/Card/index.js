import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link>
        <Image src="https://picsum.photos/id/1/500/300" alignItems="center" />
        <Box d="flex" alignItems="baseline">
          15.02.2023
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4">
          Macbook Pro
        </Box>
        <Box>100 ₺</Box>
      </Link>
      <Button colorScheme="blue">Add to Basket</Button>
    </Box>
  );
}

export default Card;
