import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
const BrandList = (props) => {
  // const primaryTextColor = isLightTheme ? 'black' : 'white';
  // const secondaryTextColor = isLightTheme ? 'white' : 'black';

  // const brand = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { cryptoData } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
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
      {cryptoData.slice(0, 5).map((item, index) => {
        return (
          item && (
            <Flex py="3" key={index} alignItems={'center'}>
              <Box
                display={'flex'}
                w={'100%'}
                pr="2"
                borderRight={'1px solid lightgray'}
              >
                <Box ml={2}>
                  <Img
                    objectFit="contain"
                    h="30px"
                    w="30px"
                    src={item.image}
                    alt={item.name}
                  />
                </Box>
                <Box mx={'2'} w={'30%'}>
                  <Text fontWeight={'semibold'} fontSize="14px">
                    {item.name}
                  </Text>
                  <Text fontSize={'xs'}>{item.symbol.toUpperCase()}(24h)</Text>
                </Box>
                <Box w={'30%'} mx={'2'}>
                  <Img
                    objectFit="contain"
                    // w={'100%'}
                    h="auto"
                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/cardino-chart.png"
                  />
                </Box>
                <Box mx={'2'} w={'30%'}>
                  <Heading as={'h6'} size="sm">
                    $${item.current_price}
                  </Heading>
                  {/* <Text fontSize={'xs'}>+1.73%</Text> */}
                </Box>
              </Box>
            </Flex>
          )
        );
      })}
    </Carousel>
  );
};

export default BrandList;