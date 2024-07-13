import React from "react";
import {
  Body,
  Html,
  Head,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
} from "@react-email/components";
import Image from "next/image";

const Email = () => {
  
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className=" bg-white my-12 mx-auto font-sans">
           <Image width={200} height={200} alt="" src="/../emails/Logo.png"></Image>
          <Container className=" p-8 rounded-lg shadow-lg">
            <Heading className=" text-xl pt-4"> Hello There </Heading>
            <Text className="text-lg font-medium text-gray-700">
              {" "}
              Thanks for joining, check out some courses down here belllow heck
              out some courses down here belllow
            </Text>
            <Button
              className="bg-red-700  font-bold text-white    px-4 py-4 rounded-md"
              href="https://developedbyed.com"
            >
              check out the courses
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default Email;
