export const parseEmbed = (html: string) =>
  /<iframe.*src="(.+?)".*>/.exec(html)?.[1];
