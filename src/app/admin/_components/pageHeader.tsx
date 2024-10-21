import { PropsWithChildren } from "react";

export function PageHeader({ children }: PropsWithChildren) {
  return <h1 className="text-4xl mb-4">{children}</h1>;
}
