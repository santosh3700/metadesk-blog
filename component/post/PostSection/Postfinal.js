import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  // Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {
  FaFacebookSquare,
  FaEye,
  FaLinkedin,
  FaCircle,
  FaYoutube,
  FaTwitterSquare,
  FaFacebookF,
  FaComment,
  FaPinterestSquare,
  FaRegClock,
  FaEnvelope,
  FaTwitter,
} from 'react-icons/fa';
import PostSeo from '../../seo/PostSeo';
import ClassesPostBody from '../../../styles/post-body.module.css';
import Trending from '../Trending';
import { compareAsc, format } from 'date-fns';
import Link from 'next/link';

const Postfinal = ({ props }) => {
  // start here
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // store data
  const data = props.data.post;
  // const tags = data?.tags?.edges;
  const post = props.postList.edges;

  const author = props.data.post.author.node;
  const date = new Date(data.date);
  const imagePath = data.featuredImage?.node.sourceUrl;
  const videoUrl = `https://www.youtube.com/watch?v=${data.youtube.videoId}`;

  const videoLink = `https://www.youtube.com/embed/${data.youtube.videoId}`;

  const tagName = data?.tags?.edges[0]?.node?.name;
  // console.log('tagcheck', tags);
  if (!imagePath) {
    return 'not found';
  }

  // end here
  const ALSOLIKE = [1, 2, 3];
  return (
    <>
      <PostSeo data={data} />
      <Box>
        <Img
          src={imagePath}
          h={{ base: '280px', md: '480px' }}
          w={'100%'}
          objectFit={'cover'}
          objectPosition="center"
        />
        <Box
          mx={{ md: '0px', lg: '235px' }}
          position={'relative'}
          bottom={{ base: '40px', md: '80px' }}
        >
          <Grid
            rounded={4}
            px={{ base: '15px', lg: '40px' }}
            py={{ base: '15px', lg: '40px' }}
            bg={'white'}
            templateColumns={{ md: '2fr 10fr ', sm: 'repeat(1, 1fr)' }}
            textColor="white"
            gap={4}
            position={'relative'}
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <VStack position={'sticky'} top="70px" bottom="20px">
                <Text color={'#888'} fontSize={'13px'} mb={'15px'}>
                  SHARE
                </Text>
                <Center height="50px" mt={'0px !important'}>
                  <Divider
                    orientation="vertical"
                    border="1px solid #888 !important"
                  />
                </Center>
                <Icon
                  mt={'10px !important'}
                  as={FaFacebookSquare}
                  boxSize={'42px'}
                  color={'#888'}
                />
                <Icon
                  mt={'10px !important'}
                  as={FaTwitterSquare}
                  boxSize={'42px'}
                  color={'#888'}
                />
                <Icon
                  mt={'10px !important'}
                  as={FaPinterestSquare}
                  boxSize={'42px'}
                  color={'#888'}
                />
                <Icon
                  mt={'10px !important'}
                  as={FaLinkedin}
                  boxSize={'42px'}
                  color={'#888'}
                />
              </VStack>
            </Box>

            <Box>
              <Box mb={'30px'}>
                <Box
                  bg="#0ab3af !important"
                  px="10px"
                  py="4px"
                  width="max-content"
                  textDecoration="none"
                  rounded={'5px'}
                  fontSize={'13px'}
                  color={'white'}
                  size={'xs'}
                  alignContent="center"
                  textAlign={'center'}

                // px="auto"
                >
                  {tagName}
                </Box>

                <Heading
                  color={'black'}
                  as="h2"
                  my={'15px !important'}
                  fontSize={'28px'}
                  lineHeight="1.4"
                >
                  {data.title}
                </Heading>
                <Flex alignItems={'center'}>
                  <Flex alignItems={'center'} mr={'12px'}>
                    <Avatar
                      src={author.avatar}
                      h={'30px'}
                      w={'30px'}
                      mr="6px"
                    />
                    <Text pl={'5px'} fontSize={'12px'}>
                      {`${author.firstName == null ? '' : author.firstName} ${author.lastName == null ? '' : author.lastName
                        }`}
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'} mr={'12px'}>
                    <Icon
                      as={FaRegClock}
                      boxSize={3}
                      color={'rgba(0, 0, 0, 0.5)'}
                    />
                    <Text
                      pl={'5px'}
                      fontSize={'12px'}
                      color={'rgba(0, 0, 0, 0.5)'}
                    >
                      {date.toDateString()}
                    </Text>
                  </Flex>
                  <Flex alignItems={'center'} mr={'12px'}>
                    <Icon as={FaEye} boxSize={3} color={'rgba(0, 0, 0, 0.5)'} />
                    <Text
                      pl={'5px'}
                      fontSize={'12px'}
                      color={'rgba(0, 0, 0, 0.5)'}
                    >
                      0 views
                    </Text>
                  </Flex>
                </Flex>
              </Box>

              <Box>
                <Text mb={'30px'}>
                  <div
                    className={`${ClassesPostBody.content} contentBody`}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </Text>
                {/* 
                <Img
                  my={'20px'}
                  src="https://atbs.bk-ninja.com/ceris_main/wp-content/uploads/2020/04/ceris_20-1024x576.jpg"
                /> */}

                {/* <Heading
                  color={'black'}
                  as="h4"
                  my={'15px !important'}
                  fontSize={'28px'}
                  lineHeight="1.4"
                >
                  Bring a scarf or jacket.
                </Heading> */}

                {/* <Text my={'20px !important'}>
                  A scarf especially can act as a blanket or pillow during your
                  long haul flight. Nowadays its becoming less common to have a
                  blanket included on your flight, and sometimes the cabin
                  doesnt even have enough for everyone. The best advice is to
                  bring something functional just in case because flights can
                  get quite chilly. A relatively thick, large scarf will almost
                  always do the job.
                </Text> */}

                {/* <OrderedList
                  color={'rgba(0, 0, 0, 0.85) !important'}
                  my={'28px !important'}
                >
                  <ListItem>
                    Ornare porta viverra. Mollis neque sagittis Etiam. Suscipit.
                  </ListItem>
                  <ListItem>
                    Nec. Feugiat, dictumst parturient mattis tempus sollicitudin
                    ridiculus Lacus platea rhoncus. Per rutrum molestie.
                  </ListItem>
                  <ListItem>
                    Maecenas massa fermentum nibh sit senectus. Aptent torquent
                    ipsum placerat consectetuer felis eleifend tellus morbi
                    senectus nisi dignissim feugiat eget auctor, per accumsan.
                  </ListItem>
                </OrderedList> */}

                {/* <Text mb={'30px'}>
                  Whoever said Its not about the destination. Its the journey
                  never flew on a long haul flight. Those flights can be
                  painful, tiresome, jet-lagging, and not to mention absolutely
                  boring despite whatever Disney movie is playing above you on
                  the TV screen. As someone who has flown from Europe to the USA
                  countless times, I’ve picked up some tips and tricks on flying
                  long haul. Here are my tips.
                </Text> */}

                {/* <Heading
                  color={'black'}
                  as="h4"
                  my={'15px !important'}
                  fontSize={'28px'}
                  lineHeight="1.4"
                >
                  Pack a memory foam neck pillow.
                </Heading>

                <Text my={'20px !important'}>
                  A scarf especially can act as a blanket or pillow during your
                  long haul flight. Nowadays its becoming less common to have a
                  blanket included on your flight, and sometimes the cabin
                  doesnt even have enough for everyone. The best advice is to
                  bring something functional just in case because flights can
                  get quite chilly. A relatively thick, large scarf will almost
                  always do the job.
                </Text>

                <Img
                  my={'20px'}
                  src="https://atbs.bk-ninja.com/ceris_main/wp-content/uploads/2020/04/ceris_8-1024x683.jpg"
                /> */}

                <Box px={{ base: '15px', md: '90px' }} py={'35px'}>
                  <Flex
                    alignItems={'center'}
                    flexDirection={{ base: 'column', md: 'row' }}
                  >
                    <Avatar
                      h={'70px'}
                      w={'70px'}
                      src="https://secure.gravatar.com/avatar/662a272c8be177be19f47db7acac0cb9?s=180&d=mm&r=g"
                      mr={{ base: '0px', md: '30px' }}
                      mb={{ base: '10px', md: '0px' }}
                    />
                    <Box textAlign="center">
                      <Text fontSize={'15px'} fontWeight={'600'}>
                        {`${author.firstName == null ? '' : author.firstName} ${author.lastName == null ? '' : author.lastName
                          }`}
                      </Text>
                      <Text my={'8px'} fontSize={'15px'}>
                        A 26-year-old health centre receptionist who enjoys
                        going to the movies, photography and social media.
                      </Text>
                      {/* <Flex
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                      >
                        <Icon
                          as={FaEnvelope}
                          boxSize={'14px'}
                          mr="8px"
                          color={'rgba(34,34,34,0.6)'}
                        />
                        <Icon
                          as={FaTwitter}
                          boxSize={'14px'}
                          mr="8px"
                          color={'rgba(34,34,34,0.6)'}
                        />
                        <Icon
                          as={FaFacebookF}
                          boxSize={'14px'}
                          mr="8px"
                          color={'rgba(34,34,34,0.6)'}
                        />
                        <Icon
                          as={FaYoutube}
                          boxSize={'14px'}
                          mr="8px"
                          color={'rgba(34,34,34,0.6)'}
                        />
                      </Flex> */}
                    </Box>
                  </Flex>
                </Box>

                <Flex
                  justifyContent={'space-between'}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  {/* <Flex>
                    <Text
                      m={'4px 6px'}
                      fontSize="13px"
                      color={'rgba(34,34,34,0.5)'}
                    >
                      #Fashion
                    </Text>
                    <Text
                      m={'4px 6px'}
                      fontSize="13px"
                      color={'rgba(34,34,34,0.5)'}
                    >
                      #Style
                    </Text>
                    <Text
                      m={'4px 6px'}
                      fontSize="13px"
                      color={'rgba(34,34,34,0.5)'}
                    >
                      #Trend
                    </Text>
                  </Flex> */}

                  {/* <Flex>
                    <Text color={'rgba(34,34,34,0.5)'} mr={'10px'}>
                      <Icon
                        as={FaComment}
                        color={'rgba(34,34,34,0.5)'}
                        mr={'5px'}
                      />{' '}
                      0
                    </Text>
                    <Text color={'rgba(34,34,34,0.5)'} mr={'10px'}>
                      <Icon
                        as={FaEye}
                        color={'rgba(34,34,34,0.5)'}
                        mr={'5px'}
                      />{' '}
                      1523
                    </Text>
                  </Flex> */}
                </Flex>

                <Grid
                  templateColumns={{ md: '6fr 6fr', sm: 'repeat(1, 1fr)' }}
                  textColor="white"
                  mt={'10px'}
                >
                  <Box
                    border="1px solid gray"
                    py={'30px'}
                    pr={'40px'}
                    textAlign="end"
                  >
                    <Text
                      color="#222222"
                      opacity="0.5"
                      fontWeight="500"
                      mb={'7px'}
                    >
                      PREVIOUS
                    </Text>
                    <Text font-size="18px" line-height="1.5" font-weight="600">
                      The Two Most Important Tools to Reconnect With Your
                      Partner
                    </Text>
                  </Box>
                  <Box border="1px solid gray" py={'30px'} pl={'40px'}>
                    <Text
                      color="#222222"
                      opacity="0.5"
                      fontWeight="500"
                      mb={'7px'}
                    >
                      NEXT
                    </Text>
                    <Text>
                      The Next Big Thing in Fashion? Not Washing Your Clothes.
                    </Text>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Box
        py={{ base: '40px', md: '80px' }}
        px={{ base: '15px', lg: '120px' }}
        bg="#fafafa"
      >
        <Flex alignItems={'baseline'}>
          <Icon
            as={FaCircle}
            boxSize={5}
            mr="12px"
            color={'#ab20ef'}
            mb="10px"
          />

          <Heading as="h4" fontSize={'22px'} mb={'8px'}>
            YOU MAY ALSO LIKE
          </Heading>
        </Flex>

        {/* <Trending props={props} /> */}

        <Grid
          templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={8}
          my={6}
        >
          {props.trending.edges &&
            props.trending.edges.slice(0, 3).map((item, index) => {
              const author = item.node.author;
              const imagePath = item.node.featuredImage?.node.sourceUrl;
              const tags = item.node?.tags?.edges[0].node.name;
              // item.node?.tags?.edges[0];
              // console.log('checktrending', item.node?.tags?.edges[0].node.name);

              if (!imagePath) {
                return 'not found';
              }
              return (
                item &&
                item.node && (
                  <Link href={item.node.slug} key={index}>
                    <Box cursor="pointer" style={{ position: 'relative' }}>
                      <Flex
                        w={'full'}
                        h={{ base: '320px', lg: '420px' }}
                        backgroundImage={imagePath}
                        backgroundSize={'cover'}
                        backgroundPosition={'center center'}
                      >
                        <VStack
                          w={'full'}
                          justify={'center'}
                          bgGradient={
                            'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'
                          }
                        >
                          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                            <Box
                              p={4}
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '10px',
                              }}
                            >
                              <Button
                                color="white"
                                // bg={index == 0 ? "#fb7c00" : index == 1 ? "#dd03eb" : "#fb7c00"}
                                // bg={switchColor}
                                bg={'#fc4a00 !important'}
                                rounded={'5px'}
                                size="xs"
                                fontWeight={'bold'}
                              >
                                {tags}
                                {/* {tagName} */}
                              </Button>
                            </Box>

                            <Box
                              p={4}
                              w="100%"
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
                                fontSize="22px"
                                noOfLines={2}
                                lineHeight="1.5"
                                mb={{ base: '12px', md: '12px' }}
                              >
                                {item.node.title}
                                {/* {item.node.title} */}
                              </Heading>

                              <Flex alignItems={'center'}>
                                <Flex alignItems={'center'} mr={'12px'}>
                                  <Avatar
                                    src="https://bit.ly/dan-abramov"
                                    h={'30px'}
                                    w={'30px'}
                                    mr="6px"
                                  />
                                  <Text
                                    pl={'5px'}
                                    fontSize={'14px'}
                                    color="rgba(255, 255, 255, 0.85) !important"
                                  >
                                    {author.node.name}
                                  </Text>
                                </Flex>
                                <Flex alignItems={'center'}>
                                  <Icon
                                    as={FaRegClock}
                                    color={'rgba(255, 255, 255, 0.85)'}
                                    fontSize={'12px'}
                                  />
                                  <Text
                                    color={
                                      'rgba(255, 255, 255, 0.85) !important'
                                    }
                                    ml={2}
                                    fontSize={'12px'}
                                  >
                                    {format(
                                      new Date(item.node.date),
                                      'yyyy-MM-dd'
                                    )}
                                  </Text>
                                </Flex>
                              </Flex>
                            </Box>
                          </Stack>
                        </VStack>
                      </Flex>
                    </Box>
                  </Link>
                )
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default Postfinal;
