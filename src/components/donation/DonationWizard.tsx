import { Box, Button, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  DonationsDocument,
  useCreateDonationMutation,
} from '../../generated/graphql';
import CountSelection from './CountSelection';
import DonationDetails from './DonationDetails';

type DonationWizardProps = {};

const DonationWizard: React.FC<DonationWizardProps> = () => {
  const [step, setStep] = useState(0);
  const [donationDetails, setDonationDetails] = useState({ count: 20 });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [createDonation, { data }] = useCreateDonationMutation();
  const next = (values: any = {}) => {
    const mergedDetails = { ...donationDetails, ...values };

    if (step === pages.length - 1) {
      submitDonation(mergedDetails);
    } else {
      setStep(step + 1);
      setDonationDetails(mergedDetails);
    }
  };

  const previous = () => {
    setStep(step - 1);
  };
  const submitDonation = async (values: any) => {
    await createDonation({
      variables: { createDonationInput: values },
      //   refetchQueries: [
      //     {
      //       query: DonationsDocument,
      //       variables: {
      //         orderBy: {
      //           field: 'createdAt',
      //           direction: 'desc',
      //         },
      //       },
      //     },
      //   ],
      update(cache, { data }) {
        const { donations }: any = cache.readQuery({
          query: DonationsDocument,
          variables: {
            orderBy: {
              field: 'createdAt',
              direction: 'desc',
            },
          },
        });
        cache.writeQuery({
          query: DonationsDocument,
          variables: {
            orderBy: {
              field: 'createdAt',
              direction: 'desc',
            },
          },
          data: { donations: [...donations, data?.createDonation] },
        });
      },
    });
    setShowConfirmation(true);
  };

  const pages = [
    <CountSelection next={next} initialCount={donationDetails.count} />,
    <DonationDetails next={next} previous={previous} />,
  ];
  return (
    <Box boxShadow='xl' p={8} bg='white' borderRadius='xl' minW='sm'>
      {showConfirmation ? (
        <div>
          Thank you for your donation of ${data?.createDonation.count}!!
        </div>
      ) : (
        pages[step]
      )}
    </Box>
  );
};
export default DonationWizard;
