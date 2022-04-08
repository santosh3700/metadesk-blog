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
  Image,
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
import { compareAsc, format } from 'date-fns';
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

const CategoryB = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // store data
  const { data } = props;

  // console.log('vategoryB', data);

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
                {process.env.home.categoryList.CATEGORY_B.NAME}
              </Heading>
              <Text> {process.env.home.categoryList.CATEGORY_B.DESC}</Text>
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
            {data.edges &&
              data.edges.map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link key={key} href={item.node.slug}>
                      <Grid
                        cursor={'pointer'}
                        templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
                        textColor="white"
                        gap={4}
                      >
                        <Box>
                          <Flex py="4">
                            <Box w={'50%'}>
                              {item.node.featuredImage && (
                                <Image
                                  objectFit={'cover'}
                                  src={item.node.featuredImage.node.sourceUrl}
                                  alt={item.node.title}
                                />
                              )}
                            </Box>
                            <Box w={'70%'} px={4} display={'grid'}>
                              <Text fontWeight={'medium'} color={'black'}>
                                {item.node.title}
                              </Text>
                              <Flex mt="2" alignItems={'center'}>
                                <Icon as={FaRegClock} color={'black'} />
                                <Text ml={4} color={'black'}>
                                  {format(
                                    new Date(item.node.date),
                                    'yyyy-MM-dd'
                                  )}
                                </Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Grid>
                    </Link>
                  )
                );
              })}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default CategoryB;
