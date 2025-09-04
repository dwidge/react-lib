import { randInt } from "./math";

export const calcEmailAlias = (email: string, alias = randInt()) => {
  const [name, domain] = email.split("@");
  return name + "+" + alias + "@" + domain;
};
