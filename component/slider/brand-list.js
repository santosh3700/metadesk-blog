import { Box, Flex, Grid, Heading, Img, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
const BrandList = () => {
  // const primaryTextColor = isLightTheme ? 'black' : 'white';
  // const secondaryTextColor = isLightTheme ? 'white' : 'black';

  const brand = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      partialVisible={true}
      arrows={false}
      infinite={true}
      autoPlay={true}
      transitionDuration={500}
      autoPlaySpeed={2000}
    >
      {brand.map((data, index) => {
        return (
          <Flex py="3" mx={2} key={index}>
            <Box display={'flex'} pr="2" borderRight={'1px solid lightgray'}>
              <Img
                objectFit="contain"
                mx={'2'}
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/bit-coin.jpg"
              />
              <Box mx={'2'}>
                <Heading as={'h6'} size="sm">
                  Bitcoin
                </Heading>
                <Text fontSize={'xs'}>BTC (24h)</Text>
              </Box>
              <Img
                mx={'2'}
                objectFit="contain"
                w={'100%'}
                h="auto"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/cardino-chart.png"
              />
              <Box mx={'2'}>
                <Heading as={'h6'} size="sm">
                  $31,183.62
                </Heading>
                <Text fontSize={'xs'}>+1.73%</Text>
              </Box>
            </Box>
          </Flex>
        );
      })}
    </Carousel>
  );
};

export default BrandList;
