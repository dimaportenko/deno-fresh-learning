import { JSX } from "preact";

export const Link = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
  return <a {...props} class="underline underline-offset-2 text-blue-500" />;
};
