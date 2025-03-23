import {Box, VStack} from "@navikt/ds-react";
import Title from "~/components/page/Title";

interface PageProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onIconClick?: () => void;
  children: React.ReactNode;
}

export default function Page({title, icon, onIconClick, children}: PageProps) {
  return (
    <VStack className="w-full h-full">
      <Title
        title={title}
        icon={icon}
        onIconClick={onIconClick}
      />
      <Box
        as="main"
      >
        {children}
      </Box>
    </VStack>
  );
}
