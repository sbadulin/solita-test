export const splitLines = line => {
  const splittedLine = line.split(" ");
  return `${splittedLine
    .splice(0, Math.ceil(splittedLine.length / 2))
    .join(" ")}\n${splittedLine.splice(0, splittedLine.length).join(" ")}`;
};
