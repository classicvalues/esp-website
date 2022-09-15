import { Box, Link, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata, PageSubheading, PageText } from '../../components/UI';
import { SEMAPHORE_GRANT_EMAIL_ADDRESS } from '../../constants';

const SemaphoreGrantApply: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Semaphore Grant'
        // TODO: add description
        description=''
      />

      <Box
        position='relative'
        py={{ md: 12 }}
        px={{ sm: 5, md: 24, lg: 32, xl: 72 }}
        pb={5}
        mt={{ base: 24, md: 6 }}
      >
        <Stack>
          <section id='description'>
            <PageSubheading mb={8} textAlign='center'>
              Apply to Semaphore Grant
            </PageSubheading>

            <PageText textAlign='center'>
              If you have questions before submitting a grant application, you may contact us at{' '}
              <Link
                fontWeight={700}
                color='brand.orange.100'
                href={`mailto:${SEMAPHORE_GRANT_EMAIL_ADDRESS}`}
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                {SEMAPHORE_GRANT_EMAIL_ADDRESS}
              </Link>
            </PageText>
          </section>
        </Stack>
      </Box>
    </>
  );
};

export default SemaphoreGrantApply;
