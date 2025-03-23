import {Box, Heading, HStack, VStack} from "@navikt/ds-react";
import {GlassesIcon} from "@navikt/aksel-icons";

interface TitleProps {
  title: string
}

export default function Title({ title }: TitleProps) {
    return (
      <Box
        borderWidth="0 0 3 0"
        borderColor="border-strong"
        className="w-full"
        paddingBlock="12 2"
      >
        <HStack gap="2">
          <VStack
            justify="center"
          >
            <GlassesIcon fontSize="2.5rem"/>
          </VStack>
          <Heading
            size="xlarge"
          >
            {title}
          </Heading>
        </HStack>
      </Box>
    )
}