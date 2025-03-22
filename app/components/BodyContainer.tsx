import {HStack} from "@navikt/ds-react";
import React from "react";

interface BodyContainerProps {
  children: React.ReactNode;
}

export default function BodyContainer({children}: BodyContainerProps) {
  return (
    <HStack
      className="w-full flex-1 overflow-auto pl-52 pr-52 pt-4 pb-4"
    >
      {children}
    </HStack>
  )
}