import {
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
  NumberInput,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import RadioCard from './RadioCard';

type CountSelectionProps = {
  next: (values: any) => void;
  initialCount: number;
};

const options = [5, 20, 50, 100];
const CountSelection: React.FC<CountSelectionProps> = ({
  next,
  initialCount,
}) => {
  const [pounds, setPounds] = useState(initialCount);
  const [customAmount, setCustomAmount] = useState(
    '' + (options.includes(pounds) ? '' : pounds)
  );
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pounds',
    value: pounds,
    onChange: (nextValue) => {
      setCustomAmount('');
      setPounds(parseInt(nextValue));
    },
  });
  const group = getRootProps();

  const nextStep = () => {
    next({ count: pounds });
  };
  return (
    <VStack spacing={4} align='stretch'>
      <Heading as='h3' size='md'>
        JOIN #TEAMSEAS
      </Heading>
      <Text fontSize='md' fontWeight='bold'>
        $1 removes a pound of trash
      </Text>
      <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value, enterKeyHint: 'enter' });
          return (
            <RadioCard key={value} {...radio}>
              {value} pounds
            </RadioCard>
          );
        })}
      </SimpleGrid>
      <NumberInput
        onFocus={() => setPounds(0)}
        onChange={(value: any) => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField placeholder='Other amount' />
      </NumberInput>

      <hr />
      <Button
        w='full'
        colorScheme='orange'
        size='lg'
        borderRadius='full'
        onClick={nextStep}
      >
        Next
      </Button>
    </VStack>
  );
};
export default CountSelection;
