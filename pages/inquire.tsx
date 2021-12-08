import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const InquirePage: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>ESP Tech Stack PoC</title>
        <meta name='description' content='Generated by create next app' />
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex py={16} minH='100vh' direction='column' justify='center' align='center'>
        <main>
          <Center>
            <Heading as='h1' size='2xl' mb={4}>
              Submit an Inquiry
            </Heading>
          </Center>

          <Center>
            <Stack mb={16}>
              <p>
                Tell us a bit about yourself, what you’re working on, your needs or challenges, and
                any other information you feel is pertinent for us to know. You’ll hear back from
                someone on the Ecosystem Support team very soon! We only collect the following
                information submitted below and will not use or share for any purposes other than
                evaluation.
              </p>
            </Stack>
          </Center>

          {/* SF Web-to-Lead form sample */}
          <Box w={['full', '2xl']} p={[8, 10]} backgroundColor='gray.50' rounded={6}>
            <form
              action='https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8'
              method='POST'
            >
              <input type='hidden' name='oid' value='00D5E000000DkPC' />
              <input type='hidden' name='retURL' value='http://' />
              {/*
              <!--  ----------------------------------------------------------------------  -->
              <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
              <!--  these lines if you wish to test in debug mode.                          -->
              <!--  <input type="hidden" name="debug" value=1>                              -->
              <!--  <input type="hidden" name="debugEmail" value="nh.quiroz@gmail.com">     -->
              <!--  ----------------------------------------------------------------------  -->
            */}
              <Stack spacing={6} align='flex-start'>
                <FormControl id='first_name' isRequired>
                  <FormLabel htmlFor='first_name'>Your name</FormLabel>
                  <Input id='first_name' maxLength={40} name='first_name' type='text' bg='white' />
                  <FormHelperText>
                    Use whichever preferred name you would like our team to address you by.
                  </FormHelperText>
                </FormControl>

                <FormControl id='email' isRequired>
                  <FormLabel htmlFor='email'>Contact email</FormLabel>
                  <Input id='email' maxLength={80} name='email' type='email' bg='white' />
                </FormControl>

                <FormControl id='first_name'>
                  <FormLabel htmlFor='company'>Project or company name</FormLabel>
                  <Input id='company' maxLength={40} name='company' type='text' bg='white' />
                </FormControl>

                <FormControl id='00N5J000000QWsP' isRequired>
                  <FormLabel htmlFor='inquiry_type'>What are you getting in touch about?</FormLabel>
                  <Select
                    name='00N5J000000QWsP'
                    title='Type of Inquiry'
                    placeholder='Select...'
                    bg='white'
                  >
                    <option value='Project'>Project</option>
                    <option value='Exploring Possibilities'>Exploring Possibilities</option>
                    <option value='Sponsorship'>Sponsorship</option>
                  </Select>
                </FormControl>

                <FormControl id='description' isRequired>
                  <FormLabel htmlFor='description'>
                    Briefly enter your question, comment or reason for contacting us below
                  </FormLabel>
                  <Textarea name='description' bg='white' />
                </FormControl>

                <Checkbox>
                  Subscribe to the ESP Newsletter? You&apos;ll hear from us every few weeks, and
                  we&apos;ll only ever contact you with ESP news.
                </Checkbox>

                <Button colorScheme='blue' px={8} py={6} type='submit'>
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </main>
      </Flex>
    </Container>
  );
};

export default InquirePage;
