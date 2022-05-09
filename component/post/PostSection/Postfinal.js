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
import React, { useState, useEffect } from 'react';
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
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { RWebShare } from 'react-web-share';
import { FaShareAlt } from 'react-icons/fa';

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
  const postTitle = props.data?.post?.title;

  const [prevNextPost, setPrevNextPost] = useState({
    previousPost: '',
    nextPost: '',
  });

  const tagName = data?.tags?.edges[0]?.node?.name;
  var prevPostObj = [];
  var nextPageObj = [];
  // console.log('postcheck', props.data.posts.edges);
  props.data.posts.edges.map((item, index) => {
    // console.log('postcheck', item.node.title);
    if (item.node.title == postTitle) {
      console.log('postcheck', prevNextPost);
      prevPostObj = {
        id: index - 1,
        title: props.data.posts.edges[index - 1]?.node?.title,
        slug: props.data.posts.edges[index - 1]?.node?.uri,
        image:
          props.data.posts.edges[index - 1]?.node?.featuredImage?.node
            ?.sourceUrl,
      };
      nextPageObj = {
        id: index + 1,
        title: props.data.posts.edges[index + 1]?.node?.title,
        slug: props.data.posts.edges[index + 1]?.node?.uri,
        image:
          props.data.posts.edges[index + 1]?.node?.featuredImage?.node
            ?.sourceUrl,
      };
      // setPrevNextPost({
      //   previousPost: {
      //     id: props.data.posts.edges[index - 1],
      //     title: props.data.posts.edges[index - 1].node.title,
      //   },
      //   nextPost: {
      //     id: props.data.posts.edges[index + 1],
      //     title: props.data.posts.edges[index + 1].node.title,
      //   },
      // });
    }
  });

  // share

  const post_link = props.data.post.seo.canonical;
  const post_title = data.title;

  useEffect(() => {
    setPrevNextPost({
      previousPost: prevPostObj,
      nextPost: nextPageObj,
    });
  }, []);
  console.log('checkprevnext', prevNextPost);

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

                <FacebookShareButton url={post_link}>
                  <FacebookIcon
                    size={'42px'}
                    color={'#888'}
                    mt={'10px !important'}
                  />
                </FacebookShareButton>
                <TwitterShareButton url={post_link}>
                  <TwitterIcon size={'42px'} color={'#888'} />
                </TwitterShareButton>
                <TelegramShareButton url={post_link}>
                  <TelegramIcon size={'42px'} color={'#888'} />
                </TelegramShareButton>
                <WhatsappShareButton url={post_link}>
                  <WhatsappIcon size={'42px'} color={'#888'} />
                </WhatsappShareButton>
                <LinkedinShareButton edinShareButton url={post_link}>
                  <LinkedinIcon size={'42px'} color={'#888'} />
                </LinkedinShareButton>
                <TumblrShareButton url={post_link}>
                  <TumblrIcon size={'42px'} color={'#888'} />
                </TumblrShareButton>
              </VStack>

              <Flex
                display={{ base: 'block', md: 'none' }}
                className="mobileShareContainer"
              >
                <RWebShare
                  data={{
                    text: post_title,
                    url: post_link,
                    title: 'Share this news to',
                  }}
                  onClick={() => console.log('shared successfully!')}
                >
                  <FaShareAlt size={30} />
                </RWebShare>
              </Flex>
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
                  fontSize={{ base: '24px', md: '28px' }}
                  lineHeight="1.4"
                >
                  {data.title}
                </Heading>
                <Flex
                  alignItems={{ base: 'left', md: 'center' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Flex
                    alignItems={'center'}
                    mr={'12px'}
                    mb={{ base: '10px', md: '0px' }}
                  >
                    <Avatar
                      src={author.avatar}
                      h={'30px'}
                      w={'30px'}
                      mr="6px"
                    />
                    <Text pl={'5px'} fontSize={'12px'}>
                      {`${author.firstName == null ? '' : author.firstName} ${
                        author.lastName == null ? '' : author.lastName
                      }`}
                    </Text>
                  </Flex>
                  <Flex
                    alignItems={'center'}
                    mr={'12px'}
                    mb={{ base: '10px', md: '0px' }}
                  >
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
                    <Text fontSize={'12px'} color={'rgba(0, 0, 0, 0.5)'}>
                      {' '}
                      <Icon
                        mr={'5px'}
                        as={FaEye}
                        boxSize={3}
                        color={'rgba(0, 0, 0, 0.5)'}
                      />
                      124563
                    </Text>
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

              <Text mb={'30px'} className="postfinaldata">
                <div
                  className={`${ClassesPostBody.content} contentBody`}
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </Text>

              {/* share icon for mobile */}

              <Box display={{ base: 'block', md: 'none !important' }}>
                <Flex flexDirection="column">
                  <Heading
                    color={'black'}
                    as="h4"
                    mb={'25px !important'}
                    fontSize={'18px'}
                    lineHeight="1.2"
                  >
                    SHARE
                  </Heading>

                  <Flex justifyContent={'space-between'}>
                    <FacebookShareButton url={post_link}>
                      <FacebookIcon size={'42px'} color={'#888'} />
                    </FacebookShareButton>
                    <TwitterShareButton url={post_link}>
                      <TwitterIcon size={'42px'} color={'#888'} />
                    </TwitterShareButton>
                    <TelegramShareButton url={post_link}>
                      <TelegramIcon size={'42px'} color={'#888'} />
                    </TelegramShareButton>
                    <WhatsappShareButton url={post_link}>
                      <WhatsappIcon size={'42px'} color={'#888'} />
                    </WhatsappShareButton>
                    <LinkedinShareButton edinShareButton url={post_link}>
                      <LinkedinIcon size={'42px'} color={'#888'} />
                    </LinkedinShareButton>
                    <TumblrShareButton url={post_link}>
                      <TumblrIcon size={'42px'} color={'#888'} />
                    </TumblrShareButton>
                  </Flex>
                </Flex>
              </Box>

              <Box px={{ base: '15px', md: '90px' }} py={'35px'}>
                <Flex
                  alignItems={'center'}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Avatar
                    h={'70px'}
                    w={'70px'}
                    // src="https://secure.gravatar.com/avatar/662a272c8be177be19f47db7acac0cb9?s=180&d=mm&r=g"
                    src={author.avatar}
                    mr={{ base: '0px', md: '30px' }}
                    mb={{ base: '10px', md: '0px' }}
                  />
                  <Box textAlign={{ base: 'center', md: 'left' }}>
                    <Text fontSize={'15px'} fontWeight={'600'}>
                      {`${author.firstName == null ? '' : author.firstName} ${
                        author.lastName == null ? '' : author.lastName
                      }`}
                    </Text>
                    <Text my={'8px'} fontSize={'15px'}>
                      A 26-year-old health centre receptionist who enjoys going
                      to the movies, photography and social media.
                    </Text>
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

              {prevNextPost.previousPost !== '' &&
              prevNextPost.nextPost !== '' ? (
                <Grid
                  templateColumns={{ md: '6fr 6fr', sm: 'repeat(1, 1fr)' }}
                  textColor="white"
                  mt={'10px'}
                >
                  {prevNextPost.previousPost.slug !== undefined ? (
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
                      <Link href={prevNextPost.previousPost?.slug}>
                        <Text
                          cursor={'pointer'}
                          font-size="18px"
                          line-height="1.5"
                          font-weight="600"
                        >
                          {prevNextPost.previousPost?.title}
                        </Text>
                      </Link>
                    </Box>
                  ) : (
                    <div></div>
                  )}
                  {prevNextPost.nextPost.slug !== undefined ? (
                    <Box border="1px solid gray" py={'30px'} pl={'40px'}>
                      <Text
                        color="#222222"
                        opacity="0.5"
                        fontWeight="500"
                        mb={'7px'}
                      >
                        NEXT
                      </Text>
                      <Link href={prevNextPost.nextPost?.slug}>
                        <Text cursor={'pointer'}>
                          {prevNextPost.nextPost?.title}
                        </Text>
                      </Link>
                    </Box>
                  ) : (
                    <div></div>
                  )}
                </Grid>
              ) : (
                <div>ok</div>
              )}
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
              console.log('checktrending', author);

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
                                    // src="https://bit.ly/dan-abramov"
                                    src={author.node?.avatar?.url}
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
