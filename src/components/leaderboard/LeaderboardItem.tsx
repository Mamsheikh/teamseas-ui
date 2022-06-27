import { Flex, Avatar, Badge, Text, Box } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';

interface Donation {
  id?: string;
  count: number;
  displayName: string;
  message?: string | null | undefined;
  team?: string | null | undefined;
  createdAt: string;
}
type LeaderboardItemProps = {
  donation?: Donation | null;
};

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ donation }) => {
  return (
    <Flex
      boxShadow='md'
      p={3}
      bg='white'
      borderRadius='lg'
      maxWidth='xl'
      w='100%'
    >
      <Avatar size='lg' />
      <Box flex='1' ml={4}>
        <Flex justifyContent='space-between' h='100%'>
          <Flex flexDirection='column' justifyContent='center' textAlign='left'>
            <Text
              fontWeight='bold'
              color='blue.500'
              fontSize='sm'
              textTransform='uppercase'
            >
              {donation?.team}
            </Text>
            <Text fontWeight='bold'>{donation?.displayName}</Text>
            <Text fontSize='sm'>{donation?.message}</Text>
          </Flex>

          <Flex
            flexDirection='column'
            justifyContent='space-around'
            textAlign='right'
          >
            <div>
              <Badge
                colorScheme='blue'
                borderRadius='full'
                textTransform='lowercase'
                py={1}
                px={3}
                as='div'
              >
                {donation?.count.toLocaleString()} pounds
              </Badge>
            </div>
            <Text fontSize='xs'>
              {moment(donation?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default LeaderboardItem;
