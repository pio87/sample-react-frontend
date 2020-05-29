export const extractCharacterIdFromUrl = (url: string): string => {
  const regex = /^.+people\/(\d+)\/$/gm;

  const result = regex.exec(url);

  return result ? result[1] : '';
};
