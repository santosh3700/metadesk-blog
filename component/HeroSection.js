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
import Head from 'next/head';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { compareAsc, format } from 'date-fns';
import Brandlist from './slider/brand-list';
// import Bulletslider from './slider/BulletSlider';

const HeroSection = (props) => {
  // responsiveness

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  // theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // store data
  const { data } = props;

  // console.log('herosection', data);

  return (
    <>
      <Box my={{ base: '2', md: '8' }} px={{ base: '4', lg: '16' }}>
        <Box border={'1px solid '} px={2}>
          <Brandlist />
        </Box>
      </Box>

      <Box px={{ base: '4', lg: '16' }} mb="20" mt={'8'}>
        {/* trisha */}

        <Grid
          templateColumns={{ md: '6fr 3fr 3fr', sm: 'repeat(3, 1fr)' }}
          textColor="white"
          gap={4}
        >
          <>
            <Carousel
              showDots={true}
              arrows={false}
              className="bulletslider"
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              transitionDuration={500}
              autoPlaySpeed={4000}
            >
              {data.edges &&
                data.edges.slice(0, 5).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  // console.log('checktag', item.node);
                  return (
                    <Link key={index} href={item.node.slug}>
                      <Box cursor="pointer" style={{ position: 'relative' }}>
                        <Img
                          draggable={false}
                          style={{ width: '100%' }}
                          h={{ base: '300px', md: '500px' }}
                          src={item.node.featuredImage.node.sourceUrl}
                          alt={item.node.title}
                          // opacity={'0.7'}
                          objectFit={'cover'}
                        />

                        <Box
                          p={4}
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                          }}
                        >
                          {tagName && (
                            <Button
                              color="white"
                              bg="blue"
                              rounded={'none'}
                              size="xs"
                              fontWeight={'bold'}
                            >
                              {tagName}
                            </Button>
                          )}
                        </Box>

                        <Box
                          p={4}
                          w="100%"
                          style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            color: 'white',
                            background: '#0000005e',
                          }}
                        >
                          <Heading
                            color={'white'}
                            as="h4"
                            size={{ base: 'sm', md: 'lg' }}
                            noOfLines={1}
                          >
                            {item.node.title}
                          </Heading>
                          <Flex mt="2" alignItems={'center'}>
                            <Icon as={FaRegClock} color={'white'} />
                            <Text color={'white'} ml={4}>
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                      </Box>
                    </Link>
                  );
                })}
            </Carousel>
          </>
          {data.edges &&
            data.edges.slice(5, 6).map((item, index) => {
              const tagName = item?.node?.tags?.edges[0]?.node?.name;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
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
                        {tagName && (
                          <Button
                            bg={'#03a9e7'}
                            color="white"
                            rounded={'none'}
                            size="xs"
                            fontWeight={'bold'}
                          >
                            {tagName}
                          </Button>
                        )}
                      </Box>

                      <Img
                        draggable={false}
                        alt={item.node.title}
                        style={{ width: '100%', height: '100%' }}
                        src={item.node.featuredImage.node.sourceUrl}
                        // opacity={'0.9'}
                        objectFit={'cover'}
                      />
                      <Box
                        p={4}
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          color: 'white',
                          background: '#0000005e',
                        }}
                      >
                        <Heading
                          color={'white'}
                          as="h4"
                          size={{ base: 'sm', md: 'md' }}
                          noOfLines={1}
                        >
                          {item.node.title}
                        </Heading>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon as={FaRegClock} color={'white'} />{' '}
                          <Text color={'white'} ml={4}>
                            {format(new Date(item.node.date), 'yyyy-MM-dd')}
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Link>
                )
              );
            })}

          <Box display={'grid'}>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={4}
            >
              {data.edges &&
                data.edges.slice(6, 8).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  // console.log('checkiteem', item);
                  return (
                    item &&
                    item.node && (
                      <Link key={index} href={item.node.slug}>
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
                            {tagName && (
                              <Button
                                bg={'#03a9e7'}
                                color="white"
                                rounded={'none'}
                                size="xs"
                                fontWeight={'bold'}
                              >
                                {tagName}
                              </Button>
                            )}
                          </Box>
                          <Img
                            alt={item.node.title}
                            style={{ width: '100%', height: '100%' }}
                            src={item.node.featuredImage.node.sourceUrl}
                            // opacity={'0.7'}
                            objectFit={'cover'}
                          />
                          <Box
                            p={4}
                            style={{
                              position: 'absolute',
                              left: 0,
                              bottom: 0,
                              color: 'white',
                              background: '#0000005e',
                            }}
                          >
                            <Heading
                              as="h4"
                              size={{ base: 'sm', md: 'md' }}
                              color={'white'}
                              noOfLines={1}
                            >
                              {item.node.title}
                            </Heading>
                            <Flex mt="2" alignItems={'center'}>
                              <Icon as={FaRegClock} color={'white'} />{' '}
                              <Text color={'white'} ml={4}>
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
                              </Text>
                            </Flex>
                          </Box>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>
        </Grid>

        {/* trisha */}
      </Box>
    </>
  );
};

export default HeroSection;
