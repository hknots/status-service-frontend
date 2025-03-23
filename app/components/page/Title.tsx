import {Box, Heading, HStack, VStack} from "@navikt/ds-react";

interface TitleProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Title({title, icon: Icon}: TitleProps) {
  return (
    <Box
      borderWidth="0 0 3 0"
      borderColor="border-strong"
      className="w-full"
      paddingBlock="12 2"
      margin="0 0 3 0"
    >
      <HStack gap="2">
        <VStack justify="center">
          <Icon fontSize="2.5rem"/>
        </VStack>
        <Heading size="xlarge">{title}</Heading>
      </HStack>
    </Box>
  );
}
