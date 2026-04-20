import { findAndReplace } from "mdast-util-find-and-replace";

// Supports inline highlight syntax: ==highlighted text==
// We convert it to a <mark> element via mdast node data.
export default function remarkMark() {
  return (tree: unknown) => {
    findAndReplace(tree as any, [
      [
        /==([^=\n]+)==/g,
        (_match: string, value: string) => ({
          type: "emphasis",
          data: {
            hName: "mark",
          },
          children: [{ type: "text", value }],
        }),
      ],
    ]);
  };
}
