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
  VStack,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { compareAsc, format } from 'date-fns';
// import EditorPicks from '../slider/EditorPicks';

const CategoryA = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // responsiveness of carousel

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

  // store data
  const { data } = props;

  // temp var
  const tempArr = [1, 2, 3, 4, 5, 6];
  const tempArrSecond = [1, 2, 3];

  // get post  from api
  const postArr = [];
  var k = 0;
  for (let i = 0; i < data.edges.length / 6; i++) {
    var postObj = [];
    if (i > data.edges.length / 6) {
      break;
    }
    for (let j = 0; j < 3; j++) {
      const title = data.edges[k].node.title;
      const featuredImage = data.edges[k].node.featuredImage.node.sourceUrl;
      const date = data.edges[k].node.date;
      const slug = data.edges[k].node.slug;
      const tag = data.edges[k].node.tags;

      const tempObj = {
        title: title,
        featuredImage: featuredImage,
        date: date,
        slug: slug,
        tag: tag,
      };

      postObj.push(tempObj);
      k = k + 1;
    }

    postArr.push(postObj);
  }

  return (
    <>
      <Box px={{ base: '4', lg: '16' }} mb="20">
        <Grid
          templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={4}
        >
          <Box>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Flex alignItems={'baseline'}>
                <Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
                <Box>
                  <Heading as="h2" size={'lg'} color={primaryTextColor}>
                    {process.env.home.categoryList.CATEGORY_A.NAME}
                  </Heading>
                  <Text color={primaryTextColor}>
                    {process.env.home.categoryList.CATEGORY_A.DESC}
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
                  <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
                  <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Link href={process.env.home.categoryList.CATEGORY_A.SLUG}>
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
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
              gap={4}
              mt={6}
            >
              {/* loop here */}
              <Carousel responsive={responsive} autoPlay={false}>
                {postArr &&
                  postArr.map((post, index) => {
                    return (
                      <Grid
                        key={index}
                        templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
                        textColor="white"
                      >
                        {post &&
                          post.map((item, j) => {
                            // console.log('catea', item);
                            const tagName = item?.tag?.edges[0]?.node?.name;
                            // console.log('catA', tagName);
                            //  const tagName =
                            //    item?.node?.tags?.edges[0]?.node?.name;
                            return (
                              <Link key={j} href={item.slug}>
                                <Box
                                  cursor={'pointer'}
                                  px="4"
                                  borderRight={'1px solid #b3b3b3'}
                                >
                                  <Flex
                                    py="4"
                                    borderBottom={'1px solid #b3b3b3'}
                                  >
                                    <Box w={'70%'}>
                                      {tagName && (
                                        <Button
                                          bg={'#03a9e7'}
                                          color="white"
                                          mb={2}
                                          rounded={'none'}
                                          size="xs"
                                          fontWeight={'bold'}
                                        >
                                          {tagName}
                                        </Button>
                                      )}
                                      <Text
                                        fontWeight={'bold'}
                                        noOfLines={2}
                                        color={isLightTheme ? 'black' : 'white'}
                                      >
                                        {item.title}
                                      </Text>
                                      <Flex mt="2" alignItems={'center'}>
                                        <Icon
                                          as={FaRegClock}
                                          color={primaryTextColor}
                                        />
                                        <Text ml={4} color={primaryTextColor}>
                                          {format(
                                            new Date(item.date),
                                            'yyyy-MM-dd'
                                          )}
                                        </Text>
                                      </Flex>
                                    </Box>
                                    <Box w={'30%'} ml={2}>
                                      {item.featuredImage && (
                                        <Img
                                          h={'100%'}
                                          objectFit={'cover'}
                                          src={item.featuredImage}
                                          alt={item.title}
                                        />
                                      )}
                                    </Box>
                                  </Flex>
                                </Box>
                              </Link>
                            );
                          })}
                      </Grid>
                    );
                  })}
              </Carousel>
              {/* end of loop */}
            </Grid>
          </Box>

          <Box h="100%" bg="#ededed"></Box>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryA;
