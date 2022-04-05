import { Box, Button, Divider, Flex, Grid, Heading, Icon, Img, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { FaRegClock } from "react-icons/fa";


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
    }
};

const Editorpicks = () => {
    const EDITORSPICK = [1, 2, 3, 4, 5, 6];

    const EDITORthree = [1, 2, 3];

    return (
        <>
            <Carousel
                arrows={false}
                responsive={responsive} autoPlay={false}
            >
                {EDITORSPICK.map((image, index) => {
                    return (
                        <>
                            <Grid templateColumns={{ md: "12fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4}>
                                <Box px="4" borderRight={'1px solid #b3b3b3'}  >

                                    {EDITORthree.map((image, index) => {
                                        return (

                                            <Flex py="4" borderBottom={'1px solid #b3b3b3'} >
                                                <Box w={'70%'}>
                                                    <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button>
                                                    <Text fontWeight={'bold'} noOfLines={3}>
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


                        </>
                    );
                })}
            </Carousel>
        </>
    );
}

export default Editorpicks