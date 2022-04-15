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
import { compareAsc, format } from 'date-fns';
import Carousel from 'react-multi-carousel';
// import ReactPlayer from 'react-player';
// import Video from '../slider/Video';

const CategoryD = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  // responsiveness

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  console.log('checkcategoryd', props.data);

  const { data } = props;

  const tempArr = [1, 2, 3, 4];

  return (
    <>
      <Box px={{ base: '4', lg: '24' }} mb="20" py={'20'} bg={'black'}>
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={4} mr="2" color={'purple'} />
            <Box>
              <Heading as="h2" fontSize={'22px'} color={'white'}  >
                VIDEO
              </Heading>
              <Text color={subTitleTextColor}>
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={{ base: 'flex-end' }}
            mt={{ base: '4', md: '0' }}
          >
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} color={'white'} />{' '}
              <Icon color={'white'} as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Link href={process.env.home.categoryList.CATEGORY_D.SLUG}>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
                fontWeight={'bold'}
              >
                {process.env.text.MORE}
              </Button>
            </Link>
          </Box>
        </Flex>

        <Box my={'8'}>
          <Carousel arrows={false} responsive={responsive} autoPlay={false}>
            {data.edges &&
              data.edges.slice(0, 8).map((item, index) => {
                const videoId = item.node.youtube.videoId;

                const featuredImage =
                  videoId &&
                  `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                // console.log('catD', featuredImage);
                return (
                  <Link key={index} href={item.node.slug}>
                    <Box
                      cursor="pointer"
                      style={{ position: 'relative' }}
                      mx={'2'}
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
                        {/* <Button
                        bg={'#03a9e7'}
                        color="white"
                        rounded={'none'}
                        size="xs"
                        fontWeight={'bold'}
                      >
                        METAVERSE
                      </Button> */}
                      </Box>

                      <Box
                        p={4}
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: '10px',
                          color: 'white',
                        }}
                      >
                        <Icon as={FaPlayCircle} boxSize={14} />
                      </Box>

                      {featuredImage && (
                        <Img
                          draggable={false}
                          style={{ width: '100%', height: '100%' }}
                          src={featuredImage}
                          alt={item.node.title}
                        />
                      )}
                      <Heading color={'white'} as="h4" size={'md'} mt={2} lineHeight={'normal'}>
                        {item.node.title}
                      </Heading>
                      <Flex mt="2" alignItems={'center'}>

                        <Icon as={FaRegClock} color={'white'} fontSize={'sm'} />
                        <Text color={'white'} ml={2} fontSize={'sm'}>
                          Oct 18, 2019
                        </Text>
                      </Flex>
                      {/* <Box
                      p={4}
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: '10px',
                        color: 'white',
                      }}
                    >
                      <Heading color={'white'} as="h4" size={'lg'}>
                        {' '}
                        The Joy of Petty Grievances in Death Becomes Her
                      </Heading>
                      <Flex mt="2" alignItems={'center'}>
                        {' '}
                        <Icon as={FaRegClock} color={'white'} />{' '}
                        <Text color={'white'} ml={4}>
                          Oct 18, 2019
                        </Text>{' '}
                      </Flex>
                    </Box> */}
                    </Box>
                  </Link>
                );
              })}
          </Carousel>
          {/* <Video /> */}
        </Box>

        <Divider />



        <Grid
          templateColumns={{ md: '4fr 4fr 4fr 4fr', sm: 'repeat(4, 1fr)' }}
          textColor="white"
          gap={8}
          my={6}
        >
          {data.edges &&
            data.edges.slice(8, 16).map((item, index) => {
              return (
                <Link key={index} href={item.node.slug}>
                  <Box cursor="pointer">
                    <Flex py="4">
                      <Box w={'40%'}>
                        <Img
                          h={'100%'}
                          objectFit={'cover'}
                          src={item.node.featuredImage.node.sourceUrl}
                          alt={item.node.title}
                        />
                      </Box>
                      <Box w={'60%'} px={'4'}>
                        <Button
                          colorScheme={'orange'}
                          color="white"
                          mb={2}
                          rounded={'none'}
                          size="xs"
                          fontWeight={'bold'}
                        >
                          BITCOIN
                        </Button>
                        <Text
                          fontWeight={'medium'}
                          noOfLines={3}
                          lineHeight="initial"
                          paddingRight="2"
                          color={'white'}
                        >
                          {item.node.title}
                        </Text>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon as={FaRegClock} color={'white'} />
                          <Text color={'white'} ml={4}>
                            {format(new Date(item.node.date), 'yyyy-MM-dd')}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Link>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryD;
