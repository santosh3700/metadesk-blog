import { Box, Button, Divider, Flex, Grid, Heading, Icon, Img, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { FaRegClock } from "react-icons/fa";


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
    }
};

const Presslider = () => {
    const images = [
        "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/draw.jpg",
        "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/women-img.jpg",
        "https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/music.jpg",
    ];

    return (
        <>
            <Carousel
                arrows={false}
                responsive={responsive} autoPlay={false}
            >
                {images.slice(0, 5).map((image, index) => {
                    return (
                        <>
                            <Grid templateColumns={{ md: "12fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={4}>
                                <Box  >

                                    <Flex py="4">
                                        <Box w={'50%'}>
                                            <Img
                                                objectFit={'cover'}
                                                src={image}
                                            />
                                        </Box>
                                        <Box w={'70%'} px={4} display={'grid'}>

                                            <Text fontWeight={'medium'} >
                                                I Moved Across the
                                                Country and Never
                                                Looked Back
                                            </Text>
                                            <Flex mt='2' alignItems={'center'}> <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text> </Flex>
                                        </Box>


                                    </Flex>

                                </Box>


                            </Grid>


                        </>
                    );
                })}
            </Carousel>
        </>
    );
}

export default Presslider