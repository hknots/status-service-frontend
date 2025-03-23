import Title from "~/components/Title";
import {VStack} from "@navikt/ds-react";
import {GlassesIcon} from "@navikt/aksel-icons";

export default function Index() {
  return (
    <VStack
      className="w-full h-full"
    >
      <Title
        title="Miljø Oversikt - Api"
        icon={GlassesIcon}
      />
    </VStack>
  );
}
