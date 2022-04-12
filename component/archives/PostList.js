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
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';
import ArchiveSeo from '../seo/ArchiveSeo';
import PostItem from './PostItem';
import {
  FaWhatsapp,
  FaCaretRight,
  FaPastafarianism,
  FaFacebookF,
  FaTwitter,
  FaRegEdit,
} from 'react-icons/fa';
import ArchiveHeroSection from './ArchiveHeroSection';
import { useRouter } from 'next/router';
import { compareAsc, format } from 'date-fns';
import Link from 'next/link';

function PostList({ urlType, urlName, data, slug, section }) {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

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

  return (
    <>
      <ArchiveSeo data={data} pageType={pageType} pageName={pageName} />

      <Box my={8} px={{ base: '4', lg: '16' }}>
        <Heading as="h2" size={'lg'}>
          {typeName}
        </Heading>

        <Grid
          templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={6}
          my={6}
        >
          {data.edges.slice(0, 1).map((item, index) => {
            // console.log('catmap', item);
            const author = item?.node?.author.node;
            const imagePath = item.node.featuredImage?.node.sourceUrl;

            return (
              item &&
              item.node && (
                <Link key={index} href={item.node.slug}>
                  <Box cursor={'pointer'}>
                    {item?.node?.featuredImage && (
                      <Img
                        src={item.node.featuredImage.node.sourceUrl}
                        alt={item.node.title}
                      />
                    )}

                    <Box my={'2'}>
                      <Heading as={'h2'} size={'lg'} color={primaryTextColor}>
                        {item.node.title}
                      </Heading>
                      {/* <Text mt={'2'} color={primaryTextColor}>
                    All That We See or Seem is but a Dream Within a Dream
                    Becomes Her
                  </Text> */}
                      <Flex mt="2" alignItems={'center'}>
                        <Text color={primaryTextColor} fontWeight={'bold'}>
                          By <b>{`${author.name} `}</b>
                        </Text>
                        <Text color={primaryTextColor} ml={4}>
                          {format(new Date(item.node.date), 'yyyy-MM-dd')}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Link>
              )
            );
          })}
          <Box>
            {data.edges.slice(1, 5).map((item, index) => {
              const author = item?.node?.author.node;
              const imagePath = item.node.featuredImage?.node.sourceUrl;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
                    <Box cursor={'pointer'}>
                      <Grid
                        templateColumns={{
                          md: '9fr 3fr',
                          sm: 'repeat(2, 1fr)',
                        }}
                        textColor="white"
                        gap={6}
                      >
                        <Box>
                          {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                          <Heading as="h4" size={'md'} color={primaryTextColor}>
                            {item.node.title}
                          </Heading>
                          {/* <Text mt={'2'} color={primaryTextColor}>
                          All That We See or Seem is but a Dream Within a Dream
                          Becomes Her
                        </Text> */}
                          <Flex mt="2" alignItems={'center'}>
                            <Text color={primaryTextColor} fontWeight={'bold'}>
                              By <b>{`${author.name} `}</b>
                            </Text>
                            <Text color={primaryTextColor} ml={4}>
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                        <Box>
                          {item?.node?.featuredImage && (
                            <Img
                              h={'100%'}
                              objectFit={'cover'}
                              src={item.node.featuredImage.node.sourceUrl}
                              alt={item.node.title}
                            />
                          )}
                        </Box>
                      </Grid>
                      <Box my={6}>
                        <Divider />
                      </Box>
                    </Box>
                  </Link>
                )
              );
            })}
          </Box>
        </Grid>

        <Divider />
        <Box py={6}>
          <Heading as="h2" size={'lg'} color={primaryTextColor}>
            {process.env.archive.SECTION_A.NAME}
          </Heading>
          <Grid
            templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
            // textColor="white"
            gap={6}
            my={6}
          >
            {sectionAData.edges.slice(0, 4).map((item, index) => {
              const author = item?.node?.author.node;
              const imagePath = item.node.featuredImage?.node.sourceUrl;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
                    <Grid
                      cursor={'pointer'}
                      templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
                      // textColor="white"
                      gap={2}
                    >
                      <Box>
                        <Flex alignItems={'baseline'}>
                          <Text
                            fontSize={'3xl'}
                            fontWeight="bold"
                            color={'blue'}
                            mx={2}
                          >
                            {index + 1}
                          </Text>
                          {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                          <Box>
                            <Heading as="h4" size={'md'}>
                              {item.node.title}
                            </Heading>
                            <Flex mt="2" alignItems={'center'}>
                              <Text>
                                By <b>{`${author.name} `}</b>
                              </Text>
                              <Text ml={4}>
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
                              </Text>{' '}
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box>
                        <Img
                          h={'100%'}
                          objectFit={'cover'}
                          src={imagePath}
                          alt={item.node.title}
                        />
                      </Box>
                    </Grid>
                  </Link>
                )
              );
            })}
          </Grid>
        </Box>

        <Divider />
        <Box py={6}>
          <Grid
            templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
            // textColor="white"
            gap={6}
            my={6}
          >
            <Box>
              <Heading as="h2" size={'lg'} textAlign={'start'} mb={6}>
                {process.env.archive.SECTION_B.NAME}
              </Heading>

              {sectionBData.edges.slice(0, 3).map((item, index) => {
                const author = item?.node?.author.node;
                const imagePath = item.node.featuredImage?.node.sourceUrl;
                return (
                  item &&
                  item.node && (
                    <Link key={index} href={item.node.slug}>
                      <Box cursor="pointer">
                        <Grid
                          templateColumns={{
                            md: '3fr 9fr',
                            sm: 'repeat(2, 1fr)',
                          }}
                          // textColor="white"
                          gap={6}
                        >
                          <Box>
                            <Img
                              h={'100%'}
                              objectFit={'cover'}
                              src={imagePath}
                              alt={item.node.title}
                            />
                          </Box>

                          <Box>
                            {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                            <Heading as="h4" size={'md'}>
                              {item.node.title}
                            </Heading>

                            <Flex mt="2" alignItems={'center'}>
                              <Text>
                                By <b>{`${author.name} `}</b>
                              </Text>
                              <Text ml={4}>
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
                              </Text>
                            </Flex>
                          </Box>
                        </Grid>

                        <Box my={6}>
                          <Divider />
                        </Box>
                      </Box>
                    </Link>
                  )
                );
              })}
            </Box>
            {sectionCData.edges.slice(0, 1).map((item, index) => {
              const author = item?.node?.author.node;
              const imagePath = item.node.featuredImage?.node.sourceUrl;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
                    <Box cursor={'pointer'}>
                      <Heading as="h2" size={'lg'} textAlign={'start'} mb={6}>
                        {process.env.archive.SECTION_C.NAME}
                      </Heading>

                      <Img src={imagePath} alt={item.node.title} />

                      <Box my={'2'} textAlign={'start'}>
                        <Heading as={'h2'} size={'lg'}>
                          {item.node.title}
                        </Heading>
                        {/* <Text mt={'2'}>
                      All That We See or Seem is but a Dream Within a Dream
                      Becomes Her
                    </Text> */}
                        <Flex mt="2" alignItems={'center'}>
                          <Text>
                            By <b>{`${author.name} `}</b>
                          </Text>
                          <Text ml={4}>
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
