import {
  Heading,
  Box,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDonationsQuery } from '../../generated/graphql';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard: React.FC = () => {
  const [field, setField] = useState('createdAt');
  const { data } = useDonationsQuery({
    variables: {
      orderBy: {
        field,
        direction: 'desc',
      },
    },
  });

  return (
    <Box w='100%'>
      <VStack spacing={4}>
        <Heading as='h1' size='2xl'>
          LEADERBOARD
        </Heading>

        <RadioGroup onChange={setField} value={field}>
          <Stack direction='row'>
            <Radio value='createdAt'>Most Recent</Radio>
            <Radio value='count'>Most Pounds</Radio>
          </Stack>
        </RadioGroup>

        {data?.donations.map((donation) => (
          <LeaderboardItem key={donation?.id} donation={donation} />
        ))}
      </VStack>
    </Box>
  );
};
export default Leaderboard;
