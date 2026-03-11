import { useMutation } from "@tanstack/react-query";
import { MillType } from "../backend";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      companyName: string;
      city: string;
      phone: string;
      email: string;
      millType: MillType;
      message: string;
      isDemo: boolean;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEnquiry(
        data.name,
        data.companyName,
        data.city,
        data.phone,
        data.email,
        data.millType,
        data.message,
        data.isDemo,
      );
    },
  });
}

export { MillType };
