import { Box, Center, Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import { ButtonLink } from '../components';
import { PageSection, PageText } from '../components/UI';

import smallSucculentSVG from '../public/images/small-succulent.svg';
import mediumSucculentSVG from '../public/images/medium-succulent.svg';
import bigSucculentSVG from '../public/images/big-succulent.svg';
import whatWeSupportTreeMobileSVG from '../public/images/what-we-support-tree-mobile.svg';
import whatWeSupportTreeSVG from '../public/images/what-we-support-tree.svg';
import whoWeSupportRootsMobileSVG from '../public/images/who-we-support-roots-mobile.svg';
import whoWeSupportRootsSVG from '../public/images/who-we-support-roots.svg';
import howWeSupportRootsMobileSVG from '../public/images/how-we-support-roots-mobile.svg';
import howWeSupportRootsSVG from '../public/images/how-we-support-roots.svg';

import { ABOUT_URL, HOW_WE_SUPPORT_URL, WHO_WE_SUPPORT_URL } from '../constants';

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Head>
        <title>Ethereum Ecosystem Program | Homepage</title>
        <meta name='description' content='Homepage' />
      </Head>

      <Stack spacing={10} mb={8} px={5} py={3}>
        <section id='mission'>
          <PageSection mb={6}>The Ethereum Foundation&apos;s Mission</PageSection>

          <PageText>
            Our mission is to do what is best for Ethereum&apos;s long-term success. Our role is to{' '}
            <strong>allocate resources to critical projects</strong>, to be a valued voice within
            the Ethereum ecosystem, and to advocate for Ethereum to the outside world.
          </PageText>
        </section>

        <section id='esp-role'>
          <PageSection mb={6}>Ecosystem Support Program&apos;s Role</PageSection>

          <PageText mb={1}>
            As the public facing allocation arm of the Ethereum Foundation, ESP provides funding and
            other forms of support to eligible projects working to improve Ethereum. We focus on
            work that strengthens Ethereum&apos;s foundations and enables future builders, such as
            developer tools, research, community building, infrastructure and open standards.
          </PageText>
        </section>

        <section id='stats'>
          <Flex
            h='513px'
            justifyContent='center'
            alignItems='center'
            bgGradient='linear(to-br, brand.stats.bgGradient.start 2.29%, brand.stats.bgGradient.end 101.37%)'
            borderTop='5px solid'
            borderTopColor='brand.heading'
            borderBottom='5px solid'
            borderBottomColor='brand.heading'
          >
            <Flex direction='column'>
              <Flex justifyContent='center' alignItems='center' mb={10}>
                <Flex w='150px' justifyContent='center' ml='-20px'>
                  <Image
                    src={smallSucculentSVG}
                    alt='small succulent plant representing allocation in 2019'
                    height='67.83px'
                    width='71.48px'
                  />
                </Flex>

                <Stack>
                  <PageSection as='h4' textAlign='left' mb={2}>
                    2019
                  </PageSection>

                  <Box>
                    <PageText fontSize='h1' fontWeight={200} mb={1}>
                      $7.7{' '}
                      <PageText as='span' fontSize='stats'>
                        million
                      </PageText>
                    </PageText>
                  </Box>

                  <PageText fontSize='faq.question' fontWeight={400} mb={1}>
                    68 projects
                  </PageText>
                </Stack>
              </Flex>

              <Flex justifyContent='center' alignItems='center' mb={10}>
                <Flex w='150px' justifyContent='center'>
                  <Image
                    src={mediumSucculentSVG}
                    alt='medium succulent plant representing allocation in 2020'
                    height='91.93px'
                    width='96.79px'
                  />
                </Flex>

                <Stack>
                  <PageSection as='h4' textAlign='left' mb={2}>
                    2020
                  </PageSection>

                  <Box>
                    <PageText fontSize='h1' fontWeight={200} mb={1}>
                      $12.9{' '}
                      <PageText as='span' fontSize='stats'>
                        million
                      </PageText>
                    </PageText>
                  </Box>

                  <PageText fontSize='faq.question' fontWeight={400} mb={1}>
                    99 projects
                  </PageText>
                </Stack>
              </Flex>

              <Flex justifyContent='center' alignItems='center'>
                <Flex w='150px' justifyContent='center' ml={2}>
                  <Image
                    src={bigSucculentSVG}
                    alt='big opened succulent plant representing allocation in 2021'
                    height='122.29px'
                    width='131px'
                  />
                </Flex>

                <Stack>
                  <PageSection as='h4' textAlign='left' mb={2}>
                    2021
                  </PageSection>

                  <Box>
                    <PageText fontSize='h1' fontWeight={200} mb={1}>
                      $24.0{' '}
                      <PageText as='span' fontSize='stats'>
                        million
                      </PageText>
                    </PageText>
                  </Box>

                  <PageText fontSize='faq.question' fontWeight={400} mb={1}>
                    125 projects
                  </PageText>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </section>

        <section id='what-we-support'>
          <Stack
            borderRadius='10px'
            bgGradient='linear(to-br, brand.ready.bgGradient.start 10%, brand.ready.bgGradient.end 100%)'
            h={{ xs: '100%', md: '458px' }}
            w='100%'
            justifyContent='center'
          >
            <Flex
              alignItems='center'
              direction={{ base: 'column', md: 'row' }}
              px={6}
              py={{ xs: 10, md: 0 }}
            >
              <Stack mb={4} mr={{ base: 0, md: 12 }}>
                <PageSection textAlign={{ base: 'center', md: 'left' }} mb={6}>
                  What we support
                </PageSection>

                <Box>
                  <Image
                    src={isMobile ? whatWeSupportTreeMobileSVG : whatWeSupportTreeSVG}
                    alt='supported categories tree'
                    objectFit='cover'
                    quality={85}
                  />
                </Box>
              </Stack>

              <Stack>
                <PageText mb={6}>
                  We award dozens of grants each quarter, across a variety of categories. We support{' '}
                  <strong>open source projects</strong> that strengthen Ethereum&apos;s foundations,
                  with a particular focus on builder tools, infrastructure, research, community
                  resources and other public goods. Funding is generally directed toward supporting
                  builders rather than end users.
                </PageText>

                <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                  <ButtonLink label='Read more' link={ABOUT_URL} width='247px' />
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </section>

        <section id='who-we-support'>
          <Stack
            borderRadius='10px'
            bgGradient='linear(to-br, brand.whoWeSupport.bgGradient.start 0%, brand.whoWeSupport.bgGradient.end 100%)'
            h={{ xs: '100%', md: '458px' }}
            w='100%'
            justifyContent='center'
          >
            <Flex
              alignItems='center'
              direction={{ base: 'column', md: 'row' }}
              px={6}
              py={{ xs: 10, md: 0 }}
            >
              <Stack mb={4} mr={{ base: 0, md: 12 }}>
                <PageSection textAlign={{ base: 'center', md: 'left' }} mb={6}>
                  Who We Support
                </PageSection>

                <Box>
                  <Image
                    src={isMobile ? whoWeSupportRootsMobileSVG : whoWeSupportRootsSVG}
                    alt='supported categories tree'
                    objectFit='cover'
                    quality={85}
                  />
                </Box>
              </Stack>

              <Stack>
                <PageText mb={6}>
                  Our grantees come from all over the world and represent many different
                  backgrounds, disciplines and levels of experience. We have supported individuals
                  and teams of all kinds - companies, DAOs, nonprofits, institutions, academics,
                  developers, educators, community organizers and more. Learn more and see a list of
                  recent grantees.
                </PageText>

                <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                  <ButtonLink label='Read more' link={WHO_WE_SUPPORT_URL} width='247px' />
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </section>

        <section id='how-we-support'>
          <Stack
            borderRadius='10px'
            bgGradient='linear(to-br, brand.howWeSupport.bgGradient.start 2.29%, brand.howWeSupport.bgGradient.end 101.37%)'
            h={{ xs: '100%', md: '458px' }}
            w='100%'
            justifyContent='center'
          >
            <Flex
              alignItems='center'
              direction={{ base: 'column', md: 'row' }}
              px={6}
              py={{ xs: 10, md: 0 }}
            >
              <Stack mb={4} mr={{ base: 0, md: 12 }}>
                <PageSection textAlign={{ base: 'center', md: 'left' }} mb={6}>
                  How We Support
                </PageSection>

                <Box>
                  <Image
                    src={isMobile ? howWeSupportRootsMobileSVG : howWeSupportRootsSVG}
                    alt='people making research about supported categories'
                    objectFit='cover'
                    quality={85}
                  />
                </Box>
              </Stack>

              <Stack>
                <Stack mb={6}>
                  <PageText mb={6}>
                    We aim to deploy resources, both financial and non-financial, where they will
                    have the biggest impact. We try to keep our processes flexible and evolving in
                    order to be open to new ideas and support builders of all kinds.
                  </PageText>

                  <PageText>
                    Grants are awarded through a formal application and evaluation process, while
                    our office hours are an opportunity to explore a broad range of support through
                    an informal conversation with a member of the ESP team, such as project
                    feedback, advice, help navigating the ecosystem or guidance on submitting a
                    grant application.
                  </PageText>
                </Stack>

                <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                  <ButtonLink label='Read more' link={HOW_WE_SUPPORT_URL} width='247px' />
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </section>
      </Stack>
    </>
  );
};

export default Home;
