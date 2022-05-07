import {
  Box,
  SimpleGrid,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useColorMode,
  Img,
  Avatar,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import ArchiveSeo from '../seo/ArchiveSeo';
import PostItem from './PostItem';
import ArchiveHeroSection from './ArchiveHeroSection';
import { useRouter } from 'next/router';
import { compareAsc, format } from 'date-fns';
import Link from 'next/link';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
// import ReactPlayer from 'react-player';

function PostList({ urlType, urlName, data, slug, section }) {


  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  const tempArr = [1, 2, 3];
  const tempArrTwo = [1, 2, 3, 4];
  //   console.log('chekcsulg', data.edges.length);

  const pageType = ucfirst(slug[0]);
  const pageName = ucfirst(slug[1].replace('-', ' '));

  const router = useRouter();

  const pathName = router.asPath;

  const pathArr = router.asPath.split('/');
  const name = pathArr[pathArr.length - 1];

  const typeName = name.split('-').join(' ').toUpperCase();
  const breadcrumb = router.asPath.split('/');

  const { sectionAData, sectionBData, sectionCData } = section;
  // console.log('checkcat', sectionAData);

  const gridimg = [1, 2, 3, 4, 5, 6, 7, 8]
  const slideimg = [1, 2, 3, 4,]

  return (
    <>
      <ArchiveSeo data={data} pageType={pageType} pageName={pageName} />

      <Box my={8} px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}>

        <Flex alignItems={'baseline'}>
          <Icon as={FaCircle} boxSize={5} mr="12px" color={'#ab20ef'} />
          <Box>
            <Heading as="h2" fontSize={'24px'} mb="8px">
              {typeName}
            </Heading>
            <Text color={subTitleTextColor}>
              The #1 source for good news!
            </Text>
          </Box>
        </Flex>


        {/* <Heading as="h2" size={'lg'}>
          {typeName}
        </Heading> */}

        <Grid
          templateColumns={{ md: '8fr 4fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={2}
          my='50px'
        >

          {data.edges &&
            data.edges.slice(0, 1).map((item, index) => {
              const tagName = item?.node?.tags?.edges[0]?.node?.name;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
                    <Flex
                      w={'full'}
                      h={{ base: '320px', md: '470px' }}
                      backgroundImage={item.node.featuredImage.node.sourceUrl}
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}>

                      <VStack
                        style={{ position: 'relative' }}
                        w={'full'}
                        justify={'center'}
                        bgGradient={'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'}>
                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
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
                                bg={'#fc4a00 '}
                                color="white"
                                rounded='5px'
                                size="xs"
                                fontWeight={'bold'}
                              >
                                {tagName}
                              </Button>
                            )}
                          </Box>

                          <Box
                            p='20px'
                            style={{
                              position: 'absolute',
                              left: 0,
                              bottom: 0,
                              color: 'white',
                            }}
                          >
                            <Heading
                              color={'white'}
                              as="h4"
                              fontSize={{ base: 'sm', md: 'lg' }}
                              noOfLines={2}
                              lineHeight="1.5"
                              mb={{ base: '12px', md: '12px' }}
                            >
                              {item.node.title}
                            </Heading>
                            <Flex mt="2" alignItems={'center'}>
                              <Flex alignItems={'center'} mr={'12px'}>
                                <Avatar
                                  src='https://bit.ly/dan-abramov'
                                  h={'30px'}
                                  w={'30px'}
                                  mr="6px"
                                />
                                <Text pl={'5px'} fontSize={'14px'} color={'white'}>
                                  Trisha
                                </Text>
                              </Flex>

                              <Icon as={FaRegClock} color={'white'} fontSize="12px" />
                              <Text color={'white'} ml={2} fontSize="12px">
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
                              </Text>
                            </Flex>
                          </Box>
                        </Stack>

                      </VStack>
                    </Flex>
                  </Link>
                )
              );
            })}

          <Box display={'grid'}>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={2}
            >
              {data.edges &&
                data.edges.slice(1, 3).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  // console.log('checkiteem', item);
                  return (
                    item &&
                    item.node && (
                      <Link key={index} href={item.node.slug}>

                        <Flex
                          w={'full'}
                          h={{ base: '250px', md: '100%' }}
                          backgroundImage={item.node.featuredImage.node.sourceUrl}
                          backgroundSize={'cover'}
                          backgroundPosition={'center center'}>

                          <VStack
                            style={{ position: 'relative' }}
                            w={'full'}
                            justify={'center'}
                            bgGradient={'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'}>
                            <Stack maxW={'2xl'} align={'flex-start'} >
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
                                    bg={'#fc4a00 '}
                                    color="white"
                                    rounded='5px'
                                    size="xs"
                                    fontWeight={'bold'}
                                  >
                                    {tagName}
                                  </Button>
                                )}
                              </Box>


                              {/* <Box 
                                style={{
                                  position: 'absolute',
                                  right: 10,
                                  top: '10px',
                                  color: 'white',
                                }}
                              >
                                <Icon as={FaPlayCircle} boxSize='50px' />
                              </Box> */}

                              <Box
                                p='20px'
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  bottom: 0,
                                  color: 'white',
                                }}
                              >
                                <Heading
                                  color={'white'}
                                  as="h4"
                                  fontSize={{ base: 'sm', md: 'lg' }}
                                  noOfLines={2}
                                  lineHeight="1.5"
                                  mb={{ base: '12px', md: '12px' }}
                                >
                                  {item.node.title}
                                </Heading>
                                <Flex mt="2" alignItems={'center'}>
                                  <Icon as={FaRegClock} color={'white'} fontSize="12px" />
                                  <Text color={'white'} ml={2} fontSize="12px">
                                    {format(new Date(item.node.date), 'yyyy-MM-dd')}
                                  </Text>
                                </Flex>
                              </Box>
                            </Stack>

                          </VStack>
                        </Flex>


                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>
        </Grid>

        <Grid
          templateColumns={{ md: '9fr 3fr', sm: 'repeat(1, 1fr)' }}
          gap={10}
          my={20}
          position={'relative'}
        >
          <Box>
            <Grid
              templateColumns={{ md: '6fr 6fr', sm: 'repeat(1, 1fr)' }}
              gap={10}
            >

              {gridimg.map((item, index) => {
                return (
                  <Box>
                    <Box position={'relative'} mb='20px'>
                      <Img src='https://atbs.bk-ninja.com/ceris_main/wp-content/uploads/2021/08/ceris_1-400x300.jpg' />
                      <Button
                        position={'absolute'}
                        bottom="0px"
                        bg={'#fc4a00 '}
                        color="white"
                        rounded='none'
                        size="xs"
                        fontWeight={'bold'}
                      >
                        TRAVEL
                      </Button>
                      <Box
                        style={{
                          position: 'absolute',
                          right: 15,
                          top: '15px',
                          color: 'white',
                        }}
                      >
                        <Icon as={FaPlayCircle} boxSize='50px' />
                      </Box>
                    </Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: 'sm', md: 'lg' }}
                      noOfLines={2}
                      lineHeight="1.5"
                      mb={{ base: '12px', md: '12px' }}>
                      Adjusting to Your Home is no Different than a New Country
                    </Heading>
                    <Text fontSize='15px' mb={{ base: '12px', md: '13px' }} noOfLines={2}
                    >
                      Whoever said “It’s not about the destination. It’s the journey” never flew on a long ...
                    </Text>
                    <Flex mb={{ base: '12px', md: '12px' }} >
                      <Text fontWeight='700' fontSize='14px' color='rgba(0, 0, 0, 0.6)' mr={4}>
                        By Trisha
                      </Text>
                      <Flex alignItems={'center'}>
                        <Icon as={FaRegClock} color={'rgba(0, 0, 0, 0.5)'} fontSize="12px" />
                        <Text color={'rgba(0, 0, 0, 0.5)'} ml={1} fontSize="12px" >
                          October 18, 2019
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                );
              })}

            </Grid>
          </Box>

          <Box >
            <Box mb='55px' position={'sticky'} top={'10px'}>
              <Flex alignItems={'center'} mb='30px'>
                <Heading as={'h4'} fontSize='17px' w='-webkit-fill-available' >
                  Popular News
                </Heading>
                <Divider />
              </Flex>


              {slideimg.map((item, index) => {
                return (
                  <Flex my='20px' key={item}>
                    <Img
                      h='70px' w="70px" mr="15px"
                      src='https://atbs.bk-ninja.com/ceris_main/wp-content/uploads/2021/08/ceris_12-180x180.jpg' />
                    <Text>
                      The Scariest Moment is Always Just Before You Start
                    </Text>
                  </Flex>
                );
              })}


              <Box>
                <Flex alignItems={'center'} mb='30px'>
                  <Heading as={'h4'} fontSize='17px' w='-webkit-fill-available' >
                    Categories
                  </Heading>
                  <Divider />
                </Flex>

                {slideimg.map((item, index) => {
                  return (
                    <Box position={'relative'} mt="20px">
                      <Img src='https://atbs.bk-ninja.com/ceris_main/wp-content/uploads/2020/04/a-photograph-of-a-woman-holding-a-canadian-flag-2961063-min-400x200.jpg' />
                      <Box textAlign={'center'} position={'absolute'} left={'30%'} right={'30%'} top={'45%'}>
                        <Button size="xs" rounded={'none'} bg="#4ca80b" color='white' >
                          LIFESTYLE
                        </Button>
                      </Box>
                    </Box>
                  );
                })}

              </Box>

            </Box>


          </Box>
        </Grid>


      </Box>

      {/* <ArchiveHeroSection newsData={data.edges} /> */}
    </>
  );
}

function ucfirst(str) {
  var firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.substring(1);
}

export default PostList;
