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
          <Container className="p-8 rounded-lg shadow-lg  bg-white">
            <Section>
              <Row>
                <Column>
                  {" "}
                  <Img
                    src={`${baseUrl}/static/Logo.png`}
                    width="120"
                    height="56"
                    alt="Logo"
                    className=""
                  ></Img>
                </Column>
                <Column className="flex items-center justify-end gap-4">
                  <Img
                    src={`${baseUrl}/static/face.png`}
                    width="24"
                    height="24"
                    alt="facebook"
                    className=" my-4"
                  />
                  <Img
                    src={`${baseUrl}/static/insta.png`}
                    width="24"
                    height="24"
                    alt="facebook"
                    className=""
                  />
                  <Img
                    src={`${baseUrl}/static/twitter.png`}
                    width="24"
                    height="24"
                    alt="twitter"
                    className=""
                  />
                </Column>
              </Row>
            </Section>
            <Section className="max-w-[600px]">
            <Img src={imageSrc} width={552} height={320} className="mt-8" />
            </Section>
            
            <Heading className="text-[16px] text-center text-purple-700 pt-2 font-semibold">
              our new product
            </Heading>
            <Text className="text-[28px] leading-[36px] text-center text-slate-950  font-semibold">
              Elegant Comfort
            </Text>
            <Text className="text-[15px] leading-[24px] text-center text-slate-700  ">
              Luxurious, plush seating for a sophisticated and cozy living room
              ambiance
            </Text>
            <Text className="text-[28px] leading-[36px] text-center text-slate-950  font-semibold">
              $999.99
            </Text>
            <Button
              className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[200px]  text-center rounded-md text-[14px] leading-[24pz]"
              href="https://developedbyed.com"
            >
              Buy
            </Button>
            <Hr className=" mt-8" />
            <Text className="text-[28px] leading-[36px] text-start text-slate-950  font-semibold">
              Unleash Creativity
            </Text>
            <Text className="text-[15px] leading-[24px] text-start text-slate-700 max-w-[600px]  ">
              Unleash your inner designer with our customizable furniture
              options, allowing you to create a space that reflects your unique
              vision
            </Text>
            <Section className="mt-8 max-w-[600px]">
              <Row className="max-w-[264px]">
                <Column className=" ">
                  <Img
                    src={`${baseUrl}/static/sleek.png`}
                    width="264"
                    height="180"
                    alt="twitter"
                    className=""
                  />
                  <Text className="text-[20px] leading-[28px] text-center  text-slate-950  font-semibold">
                    sleek study
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-center text-slate-700 w-[264px]  ">
                    Minimalist design with ample workspace{" "}
                  </Text>
                  <Text className="text-[20px] leading-[28px] text-center text-slate-950  font-semibold">
                    $299.99
                  </Text>
                  <Button
                    className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[55px]  text-center rounded-md text-[14px] leading-[24pz]"
                    href="https://developedbyed.com"
                  >
                    Buy
                  </Button>
                </Column>
                <Column className="">
                  <Img
                    src={`${baseUrl}/static/table.png`}
                    width="264"
                    height="180"
                    alt="twitter"
                    className="mx-2"
                  />
                  <Text className="text-[20px] leading-[28px] text-center  text-slate-950  font-semibold">
                    ErgoTech Desk
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-center text-slate-700 w-[264px]  ">
                    Ergonomic features for maximum comfort{" "}
                  </Text>
                  <Text className="text-[20px] leading-[28px] text-center text-slate-950  font-semibold">
                    $199.99
                  </Text>
                  <Button
                    className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[55px]  text-center rounded-md text-[14px] leading-[24pz]"
                    href="https://developedbyed.com"
                  >
                    Buy
                  </Button>
                </Column>
              </Row>
              <Hr className=" mt-8" />
              <Row className="mt-11 max-w-[264px]">
                <Column className="  ">
                  <Img
                    src={`${baseUrl}/static/chair.png`}
                    width="264"
                    height="180"
                    alt="twitter"
                    className="mx-2"
                  />
                  <Text className="text-[20px] leading-[28px] text-center  text-slate-950  font-semibold">
                    sleek study
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-center text-slate-700 w-[264px]  ">
                    Minimalist design with ample workspace{" "}
                  </Text>
                  <Text className="text-[20px] leading-[28px] text-center text-slate-950  font-semibold">
                    $299.99
                  </Text>
                  <Button
                    className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[55px]  text-center rounded-md text-[14px] leading-[24pz]"
                    href="https://developedbyed.com"
                  >
                    Buy
                  </Button>
                </Column>
                <Column className=" ">
                  <Img
                    src={`${baseUrl}/static/sofa.png`}
                    width="264"
                    height="180"
                    alt="twitter"
                    className="mx-2"
                  />
                  <Text className="text-[20px] leading-[28px] text-center  text-slate-950  font-semibold">
                    ErgoTech Desk
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-center text-slate-700 w-[264px]  ">
                    Ergonomic features for maximum comfort{" "}
                  </Text>
                  <Text className="text-[20px] leading-[28px] text-center text-slate-950  font-semibold">
                    $199.99
                  </Text>
                  <Button
                    className=" w-[160px] py-[15px] bg-purple-700 font-semibold text-white  mx-[55px]  text-center rounded-md text-[14px] leading-[24pz]"
                    href="https://developedbyed.com"
                  >
                    Buy
                  </Button>
                </Column>
              </Row>
            </Section>
            <Hr className=" mt-8" />
            <Section className="mt-8">
              <Row>
                <Column className="max-w-[100px]">
                <Img
                    src={`${baseUrl}/static/Logo.png`}
                    width="120"
                    height="56"
                    alt="Logo"
                    className=""
                  ></Img>
                 

                </Column>
                <Column className="flex items-center justify-start gap-4 ">
                  <Img
                    src={`${baseUrl}/static/face.png`}
                    width="24"
                    height="24"
                    alt="facebook"
                    className=" my-4"
                  />
                  <Img
                    src={`${baseUrl}/static/insta.png`}
                    width="24"
                    height="24"
                    alt="facebook"
                    className=""
                  />
                  <Img
                    src={`${baseUrl}/static/twitter.png`}
                    width="24"
                    height="24"
                    alt="twitter"
                    className=""
                  />
                </Column>
                
              </Row>
              <Row>
                <Column>
                <Text className="text-[20px] leading-[28px] text-start  text-slate-950  font-semibold">
                   Acme corporation
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-start text-slate-700 w-[264px]  ">
                    think diffrent
                  </Text>
                </Column>
                <Column>
                <Text className="text-[15px] leading-[24px] text-start text-slate-700 w-[264px]  ">
                  123 Main Street Anytown, CA 12345
                  </Text>
                  <Text className="text-[15px] leading-[24px] text-start text-slate-700 w-[264px]  ">
                  mail@example.com +123456789
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
