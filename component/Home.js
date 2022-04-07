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
import Head from 'next/head';
import React from 'react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import CategoryA from './categories/CategoryA';
import CategoryB from './categories/CategoryB';
import CategoryC from './categories/CategoryC';
import CategoryD from './categories/CategoryD';
import CategoryE from './categories/CategoryE';
import CategoryF from './categories/CategoryF';
import CategoryJ from './categories/CategoryJ';
import CategoryK from './categories/CategoryK';
import NewsLetter from './NewsLetter';
import Brandlist from './slider/BrandList';
import Bulletslider from './slider/BulletSlider';

const Home = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  return (
    <>
      {/* 1st section */}
      <Box my={8} px={{ base: '4', lg: '16' }}>
        <Box border={'1px solid '} px={2}>
          <Brandlist />
        </Box>
      </Box>
      {/* 2nd section */}
      <Box px={{ base: '4', lg: '16' }} mb="20" mt={'8'}>
        <Grid
          templateColumns={{ md: '6fr 3fr 3fr', sm: 'repeat(3, 1fr)' }}
          textColor="white"
          gap={4}
        >
          <>
            <Bulletslider />
          </>

          <Box
            style={{ position: 'relative' }}
            h={{ base: '250px', md: '100%' }}
          >
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                top: '10px',
                color: 'white',
              }}
            >
              <Button
                bg={isLightTheme ? 'red' : '#03a9e7'}
                color="white"
                rounded={'none'}
                size="xs"
                fontWeight={'bold'}
              >
                METAVERSE
              </Button>
            </Box>

            <Img
              draggable={false}
              alt="text"
              style={{ width: '100%', height: '100%' }}
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-two.jpg"
            />
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                bottom: '10px',
                color: 'white',
              }}
            >
              <Heading color={'white'} as="h4" size={'md'}>
                The Joy of Petty Grievances in Death Becomes Her
              </Heading>
              <Flex mt="2" alignItems={'center'}>
                <Icon color={'white'} as={FaRegClock} />
                <Text color={'white'} ml={4}>
                  Oct 18, 2019
                </Text>
              </Flex>
            </Box>
          </Box>

          <Box display={'grid'}>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={4}
            >
              <Box
                style={{ position: 'relative' }}
                h={{ base: '200px', md: '100%' }}
              >
                <Box
                  p={4}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    color: 'white',
                  }}
                >
                  <Button
                    bg={'#03a9e7'}
                    color="white"
                    rounded={'none'}
                    size="xs"
                    fontWeight={'bold'}
                  >
                    METAVERSE
                  </Button>
                </Box>
                <Img
                  alt="text"
                  style={{ width: '100%', height: '100%' }}
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-three.jpg"
                />
                <Box
                  p={4}
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '10px',
                    color: 'white',
                  }}
                >
                  <Heading as="h4" size={'md'} color={'white'}>
                    The Joy of Petty Grievances in Death Becomes Her
                  </Heading>
                  <Flex mt="2" alignItems={'center'}>
                    <Icon as={FaRegClock} color={'white'} />{' '}
                    <Text color={'white'} ml={4}>
                      Oct 18, 2019
                    </Text>{' '}
                  </Flex>
                </Box>
              </Box>
              <Box
                style={{ position: 'relative' }}
                h={{ base: '200px', md: '100%' }}
              >
                <Box
                  p={4}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    color: 'white',
                  }}
                >
                  <Button
                    bg={'#03a9e7'}
                    color="white"
                    rounded={'none'}
                    size="xs"
                    fontWeight={'bold'}
                  >
                    {' '}
                    METAVERSE
                  </Button>
                </Box>
                <Img
                  draggable={false}
                  alt="text"
                  style={{ width: '100%', height: '100%' }}
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-three.jpg"
                />
                <Box
                  p={4}
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '10px',
                    color: 'white',
                  }}
                >
                  <Heading as="h4" size={'md'} color={'white'}>
                    The Joy of Petty Grievances in Death Becomes Her
                  </Heading>
                  <Flex mt="2" alignItems={'center'}>
                    <Icon color={'white'} as={FaRegClock} />
                    <Text color={'white'} ml={4}>
                      Oct 18, 2019
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
      {/* 3nd section */}
      <CategoryA />
      {/* 4th section */}
      <CategoryB />
      {/* 5th section */}
      <CategoryC />
      {/* 6th section */}
      <CategoryD />
      {/* 7th section */}
      <CategoryE />
      {/* 8th section */}
      <CategoryF />
      {/* 9th section */}
      <CategoryJ />
      {/* 10th section */}
      <NewsLetter />
    </>
  );
};

export default Home;
