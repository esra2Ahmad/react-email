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
  Row,
  Column,
  Hr,
  Section,
} from "@react-email/components";



const Email = () => {
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
  const imageSrc = `${baseUrl}/static/image.png`;
   
  
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-slate-100 my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-lg  bg-white  max-w-[600px]">
            <section className="flex items-center  justify-between ">
              <Img
                src={`${baseUrl}/static/Logo.png`}
                width="120"
                height="56"
                alt="Logo"
                className=""
              ></Img>
              <section className="flex items-center  justify-between ">
                <Row>
                  <Column>
                    {" "}
                    <Img
                      src={`${baseUrl}/static/face.png`}
                      width="24"
                      height="24"
                      alt="facebook"
                      className="mx-2"
                    />
                  </Column>
                  <Column>
                    <Img
                      src={`${baseUrl}/static/insta.png`}
                      width="24"
                      height="24"
                      alt="insta"
                      className="mx-2"
                    />
                  </Column>
                  <Column>
                    <Img
                      src={`${baseUrl}/static/twitter.png`}
                      width="24"
                      height="24"
                      alt="twitter"
                      className="mx-2"
                    />
                  </Column>
                </Row>
              </section>
             
            </section>
            <Img src= {imageSrc} width={552} height={320}  className="mt-8"/>
            <Heading className="text-[16px] text-center text-purple-700 pt-2 font-semibold">our new product</Heading>
            <Text className="text-[28px] leading-[36px] text-center text-slate-950  font-semibold">
            Elegant Comfort
            </Text>
            <Text className="text-[15px] leading-[24px] text-center text-slate-700  ">Luxurious, plush seating for a sophisticated and cozy living room ambiance</Text>
            <Text className="text-[28px] leading-[36px] text-center text-slate-950  font-semibold">$999.99</Text>
            <Button
              className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[200px]  text-center rounded-md text-[14px] leading-[24pz]"
              href="https://developedbyed.com"
            >
              Buy
            </Button>
            <Hr className=" mt-8"/>
            <Text className="text-[28px] leading-[36px] text-start text-slate-950  font-semibold">
            Unleash Creativity
            </Text>
            <Text className="text-[15px] leading-[24px] text-start text-slate-700  ">Unleash your inner designer with our customizable furniture options, allowing you to create a space that reflects your unique vision</Text>
            <Section>
              <Row></Row>
              <Row></Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
