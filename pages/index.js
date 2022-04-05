import { Box, Button, Divider, Flex, FormControl, Grid, Heading, Icon, Img, Input, Select, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Brandlist from '../component/slider/brandlist'
import Bulletslider from '../component/slider/bulletslider'
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from "react-icons/fa";
import Editorpicks from '../component/slider/editorpicks';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Presslider from '../component/slider/presslider';
import Videoslider from '../component/slider/video';
import Video2ndslider from '../component/slider/video2nd';

export default function Home() {

  const brandlist = [1, 2, 3, 4, 5, 6, 7, 8]
  const EDITORthree = [1, 2, 3];
  const TOPNEWS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const images = [1, 2, 3, 4,];
  const socialdiv = [1, 2, 3, 4, 5];
  const nodiv = [1, 2, 3, 4, 5];


  return (
    < >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* 1st section */}

      <Box my={8} px={{ base: "4", lg: "16" }}  >
        <Box border={'1px solid black'}>
          <Brandlist />
        </Box>
      </Box>

      {/* 2nd section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' mt={'8'} >
        <Grid templateColumns={{ md: "6fr 3fr 3fr", sm: "repeat(3, 1fr)" }} textColor="white" gap={4}>
          <>
            <Bulletslider />
          </>

          <Box style={{ position: "relative" }} h={{ base: '250px', md: '100%' }}>

            <Box
              p={4}
              style={{
                position: "absolute",
                left: 0,
                top: "10px",
                color: "white",

              }}
            >

              <Button bg={'#03a9e7'} color='white' rounded={'none'} size='xs' fontWeight={'bold'} > METAVERSE</Button>

            </Box>

            <Img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-two.jpg'
            />
            <Box
              p={4}
              style={{
                position: "absolute",
                left: 0,
                bottom: "10px",
                color: "white",

              }}
            >
              <Heading color={'white'} as='h4' size={'md'}> The Joy of Petty Grievances in Death Becomes Her</Heading>
              <Flex mt='2' alignItems={'center'}> <Icon color={'white'} as={FaRegClock} /> <Text color={'white'} ml={4}>Oct 18, 2019</Text> </Flex>
            </Box>
          </Box>

          <Box display={'grid'}>

            <Grid templateColumns={{ md: "12fr", sm: "repeat(1, 1fr)" }} textColor="white" gap={4}>
              <Box style={{ position: "relative" }} h={{ base: '200px', md: '100%' }}>
                <Box
                  p={4}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "10px",
                    color: "white",

                  }}
                >
                  <Button bg={'#03a9e7'} color='white' rounded={'none'} size='xs' fontWeight={'bold'} > METAVERSE</Button>
                </Box>
                <Img
                  alt="text"
                  style={{ width: "100%", height: "100%" }}
                  src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-three.jpg'
                />
                <Box
                  p={4}
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "10px",
                    color: "white",

                  }}
                >
                  <Heading as='h4' size={'md'} color={'white'}> The Joy of Petty Grievances in Death Becomes Her</Heading>
                  <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} color={'white'} /> <Text color={'white'} ml={4}>Oct 18, 2019</Text> </Flex>
                </Box>
              </Box>
              <Box style={{ position: "relative" }} h={{ base: '200px', md: '100%' }}>
                <Box
                  p={4}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "10px",
                    color: "white",

                  }}
                >
                  <Button bg={'#03a9e7'} color='white' rounded={'none'} size='xs' fontWeight={'bold'} > METAVERSE</Button>
                </Box>
                <Img
                  draggable={false}
                  alt="text"
                  style={{ width: "100%", height: "100%" }}
                  src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/banner-three.jpg'
                />
                <Box
                  p={4}
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "10px",
                    color: "white",

                  }}
                >
                  <Heading as='h4' size={'md'} color={'white'}> The Joy of Petty Grievances in Death Becomes Her</Heading>
                  <Flex mt='2' alignItems={'center'}> <Icon color={'white'} as={FaRegClock} /> <Text color={'white'} ml={4}>Oct 18, 2019</Text> </Flex>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>

      {/* 3nd section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' >
        <Grid templateColumns={{ md: "9fr 3fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4}>
          <Box >
            <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
              <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
                <Box>
                  <Heading as='h4' size={'lg'}>
                    EDITORS PICK
                  </Heading>
                  <Text  >
                    The latest entertainment news in the world
                  </Text>
                </Box>
              </Flex>
              <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
                <Flex>
                  <Icon as={ChevronLeftIcon} boxSize={6} /> <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
              </Box>
            </Flex>
            <Grid templateColumns={{ md: "12fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4} mt={6}>
              <Editorpicks />
            </Grid>

          </Box>
          <Box h="100%" bg="#ededed">

          </Box>

        </Grid>
      </Box>

      {/* 4th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' py={'20'} bg={'#ededed'}>
        <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} >
          <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as='h4' size={'lg'}>
                PRESS RELEASES
              </Heading>
              <Text  >
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} /> <Icon as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
          </Box>
        </Flex>

        <Box my={6} bg={'white'} p={4}>
          <Presslider />
        </Box>

      </Box>

      {/* 5th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' py={'18'}  >
        <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} >
          <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as='h4' size={'lg'}>
                COINS
              </Heading>
              <Text  >
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
            <Flex mr={'2'} display={{ base: 'none', lg: 'block' }}>
              <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm'   >  ALL</Button>
              <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm'  > Bitcoin</Button>
              <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm'   > Ethrium</Button>
              <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm'   > Binance</Button>
              <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm'   > Cardano</Button>
            </Flex>

            <Select placeholder='Select option' mr={'2'} display={{ base: 'block', lg: 'none' }} size='sm' >
              <option value='option1'>ALL</option>
              <option value='option2'>Bitcoin</option>
              <option value='option3'>Ethrium</option>
              <option value='option3'>Binance</option>
              <option value='option3'>Cardano</option>
            </Select>

            <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
          </Box>
        </Flex>


        <Grid templateColumns={{ md: "4fr 4fr 4fr", sm: "repeat(3, 1fr)" }} textColor="white" gap={4} my={6} >

          <Box style={{ position: "relative" }}>
            <Box
              p={4}
              style={{
                position: "absolute",
                left: 0,
                top: "10px",
                color: "white",

              }}
            >
              <Button bg={'#03a9e7'} color='white' rounded={'none'} size='xs' fontWeight={'bold'} > METAVERSE</Button>

            </Box>
            <Img
              draggable={false}
              alt="text"
              style={{ width: "100%", height: "100%" }}
              src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg'
            />
            <Box
              p={4}
              style={{
                position: "absolute",
                left: 0,
                bottom: "10px",
                color: "white",

              }}
            >
              <Heading color={'white'} as='h4' size={'lg'}> The Joy of Petty Grievances in Death Becomes Her</Heading>
              <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} color={'white'} /> <Text color={'white'} ml={4}>Oct 18, 2019</Text> </Flex>
            </Box>
          </Box>

          <Box px="4"   >

            {EDITORthree.map((image, index) => {
              return (

                <Flex py="4" key={index}>
                  <Box w={'70%'}   >
                    <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button>
                    <Text fontWeight={'bold'} noOfLines={2} lineHeight="initial" paddingRight="2">
                      All That We See or Seem is but a Dream Within a Dream Becomes Her
                    </Text>
                    <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text> </Flex>
                  </Box>
                  <Box w={'30%'}>
                    <Img
                      h={'100%'}
                      objectFit={'cover'}
                      src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg'
                      alt='Woman paying for a purchase'
                    />
                  </Box>

                </Flex>


              );
            })}


          </Box>


          <Box px="4"  >

            {EDITORthree.map((image, index) => {
              return (

                <Flex py="4" key={index}>
                  <Box w={'70%'} >
                    <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button>
                    <Text fontWeight={'bold'} noOfLines={2} lineHeight="initial" paddingRight="2" >
                      All That We See or Seem is but a Dream Within a Dream Becomes Her
                    </Text>
                    <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text> </Flex>
                  </Box>
                  <Box w={'30%'}>
                    <Img
                      h={'100%'}
                      objectFit={'cover'}
                      src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg'
                      alt='Woman paying for a purchase'
                    />
                  </Box>

                </Flex>


              );
            })}


          </Box>



        </Grid>

        <Box h={150} bg={'#ededed'} my={6}>

        </Box>

      </Box>

      {/* 6th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' py={'20'} bg={'black'}>
        <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} >
          <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as='h4' size={'lg'} color={"white"}>
                VIDEO
              </Heading>
              <Text color={"white"} >
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} color={'white'} /> <Icon color={'white'} as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
          </Box>
        </Flex>


        <Box my={'8'}>
          <Videoslider />
        </Box>


        <Divider />

        <Grid templateColumns={{ md: "4fr 4fr 4fr 4fr", sm: "repeat(4, 1fr)" }} textColor="white" gap={8} my={6}>

          {images.slice(0, 5).map((image, index) => {
            return (
              <>
                <Box>
                  <Flex py="4">
                    <Box w={'40%'}>
                      <Img
                        h={'100%'}
                        objectFit={'cover'}
                        src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg'
                        alt='Woman paying for a purchase'
                      />
                    </Box>
                    <Box w={'60%'} px={'4'}  >
                      <Button colorScheme={'orange'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button>
                      <Text fontWeight={'medium'} noOfLines={3} lineHeight="initial" paddingRight="2" color={'white'}>
                        All That We See or Seem is but a Dream Within a Dream Becomes Her
                      </Text>
                      <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} color={'white'} /> <Text color={'white'} ml={4}>Oct 18, 2019</Text> </Flex>
                    </Box>


                  </Flex>

                </Box>

              </>
            );
          })}

        </Grid>

      </Box>

      {/* 7th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' py={'18'}>
        <Grid templateColumns={{ md: "9fr 3fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={6}>
          <Box >
            <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
              <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
                <Box>
                  <Heading as='h4' size={'lg'}>
                    TOP NEWS
                  </Heading>
                  <Text  >
                    The latest entertainment news in the world
                  </Text>
                </Box>
              </Flex>

            </Flex>
            <Grid templateColumns={{ md: "4fr 4fr 4fr", sm: "repeat(3, 1fr)" }} textColor="white" gap={4} mt={6}>

              {TOPNEWS.map((image, index) => {
                return (
                  <Box key={index}>
                    <Box style={{ position: "relative" }}>
                      <Box
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: "0",
                          color: "white",

                        }}
                      >
                        <Button bg={'#03a9e7'} color='white' rounded={'none'} size='sm' fontWeight={'bold'} > METAVERSE</Button>

                      </Box>
                      <Img src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/part.jpg' objectFit={'cover'} w={'100%'} />
                    </Box>
                    <Text fontWeight={"bold"} lineHeight={'normal'} my={'4'}>
                      The Two Most Important Tools to Reconnect With Your Partner
                    </Text>
                    <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text> </Flex>
                  </Box>
                );
              })}
            </Grid>
          </Box>


          <Box>
            <Grid templateColumns={{ md: "12fr", sm: "repeat(1, 1fr)" }} textColor="white" gap={4}  >
              {socialdiv.map((social, index) => {
                return (
                  <Flex key={index} bg={'#03a9e7'} p={'4'} alignItems={'center'}>
                    <Stack direction='row'  >
                      <Icon as={FaFacebook} boxSize={10} color={'white'} mr={4} />
                      <Divider orientation='vertical' />
                    </Stack>
                    <Flex justifyContent={'space-around'} w={'100%'}>
                      <Text color={"white"}>0</Text>
                      <Text color={"white"}>Followers</Text>
                      <Icon color={"white"} as={ChevronRightIcon} boxSize={6} />
                    </Flex>
                  </Flex>
                );
              })}
            </Grid>

            <Box my={4}>
              <Heading as={'h4'} size={'lg'} >Most Viewed</Heading>
              {nodiv.map((no, index) => {
                return (
                  <Box key={index}>
                    <Flex my={4}>
                      <Box h={'30px'} w={'65px'} borderRadius="full" bg={'#03a9e7'} mr={'4'} >
                        <Text textAlign={'center'} color="white" fontSize={'lg'} fontWeight={'bold'}>{no}</Text>
                      </Box>

                      <Text lineHeight={'normal'} fontSize="sm" >
                        Whoever said “It’s not about the destination. It’s the journey” never flew on a long haul.
                      </Text>
                    </Flex>
                    <Divider />
                  </Box>
                );
              })}

            </Box>


          </Box>

        </Grid>
      </Box>

      {/* 8th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' py={'20'} bg={'#ededed'}>
        <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} >
          <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as='h4' size={'lg'}  >
                ACADEMY
              </Heading>
              <Text   >
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} /> <Icon as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
          </Box>
        </Flex>


        <Box my={'8'}>
          <Video2ndslider />
        </Box>


        <Divider />

        <Grid templateColumns={{ md: "4fr 4fr 4fr 4fr", sm: "repeat(4, 1fr)" }} textColor="white" gap={8} my={6}>

          {images.slice(0, 5).map((image, index) => {
            return (
              <>
                <Box>
                  <Flex py="4">
                    <Box w={'40%'}>
                      <Img
                        h={'100%'}
                        objectFit={'cover'}
                        src='https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg'
                        alt='Woman paying for a purchase'
                      />
                    </Box>
                    <Box w={'60%'} px={'4'}  >
                      <Button colorScheme={'orange'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button>
                      <Text fontWeight={'medium'} noOfLines={3} lineHeight="initial" paddingRight="2"  >
                        All That We See or Seem is but a Dream Within a Dream Becomes Her
                        {/* {process.env.headerMenuName} */}
                      </Text>
                      <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text> </Flex>
                    </Box>


                  </Flex>

                </Box>

              </>
            );
          })}

        </Grid>

      </Box>

      {/* 9th section */}

      <Box px={{ base: "4", lg: "16" }} mb='20' >
        <Grid templateColumns={{ md: "9fr 3fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4}>
          <Box >
            <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }}>
              <Flex alignItems={'baseline'} ><Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
                <Box>
                  <Heading as='h4' size={'lg'}>
                    REVIEWS
                  </Heading>
                  <Text  >
                    The latest entertainment news in the world
                  </Text>
                </Box>
              </Flex>
              <Box display={'flex'} alignItems="center" justifyContent={{ base: 'flex-end' }} mt={{ base: '4', md: '0' }}>
                <Flex>
                  <Icon as={ChevronLeftIcon} boxSize={6} /> <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Button variant={'outline'} colorScheme="blue" rounded={'none'} size='sm' fontWeight={'bold'} > SEE ALL</Button>
              </Box>
            </Flex>
            <Grid templateColumns={{ md: "12fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4} mt={6}>
              <Editorpicks />
            </Grid>

          </Box>
          <Box h="100%" bg="#ededed">

          </Box>

        </Grid>
      </Box>

      {/* 10th section */}

      <Box px={{ base: "4", lg: "16" }} bg={'#166cf8'}  >

        <Grid templateColumns={{ md: "3fr 6fr 3fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4} py={'12'} >

          <Box>  </Box>
          <Box textAlign={'center'}>
            <Heading as='h4' size={'md'} color={'white'}> GET THE BEST BLOG STORIES INTO YOUR INBOX!</Heading>
            <Text color={'white'} >The latest entertainment news in the world </Text>

            <FormControl>
              <Flex my={'4'}>
                <Input bg='white' placeholder='Enter Your Email ID' mr={'4'} rounded={'none'} />
                <Button variant={'outline'} color='white' _hover={{ color: 'black', bg: 'white' }} rounded={'none'}>Submit</Button>
              </Flex>
            </FormControl>
          </Box>
          <Box></Box>

        </Grid>

      </Box>


    </>
  )
}
