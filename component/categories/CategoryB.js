import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Grid,
  Heading,
  Icon,
  Img,
  Input,
  Select,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
// import EditorPicks from '../slider/EditorPicks';
// import PressSlider from '../slider/PressSlider';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategoryB = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  const images = [
    'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/draw.jpg',
    'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/women-img.jpg',
    'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/music.jpg',
  ];
  return (
    <>
      <Box
        px={{ base: '4', lg: '16' }}
        mb="20"
        py={'20'}
        bg={isLightTheme ? '#ededed' : '#000000'}
      >
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as="h4" size={'lg'}>
                PRESS RELEASES
              </Heading>
              <Text>The latest entertainment news in the world</Text>
            </Box>
          </Flex>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={{ base: 'flex-end' }}
            mt={{ base: '4', md: '0' }}
          >
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
              <Icon as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Button
              variant={'outline'}
              colorScheme="blue"
              rounded={'none'}
              size="sm"
              fontWeight={'bold'}
            >
              SEE ALL
            </Button>
          </Box>
        </Flex>

        <Box my={6} bg={'white'} p={4}>
          <Carousel responsive={responsive} autoPlay={false}>
            {images.slice(0, 5).map((image, key) => {
              return (
                <Grid
                  key={key}
                  templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
                  textColor="white"
                  gap={4}
                >
                  <Box>
                    <Flex py="4">
                      <Box w={'50%'}>
                        <Img objectFit={'cover'} src={image} />
                      </Box>
                      <Box w={'70%'} px={4} display={'grid'}>
                        <Text fontWeight={'medium'} color={'black'}>
                          I Moved Across the Country and Never Looked Back
                        </Text>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon as={FaRegClock} color={'black'} />
                          <Text ml={4} color={'black'}>
                            Oct 18, 2019
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Grid>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default CategoryB;
