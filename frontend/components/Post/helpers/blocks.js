import { languages, highlight } from "prismjs";
import Parser from "html-react-parser";

const highlightCodeBlock = node => {
  const language = node.children[0].attribs["class"].split("language-")[1];

  const highlightedCode = highlight(
    node.children[0].children[0].data,
    languages[language]
  );

  return (
    <pre className={`code-block language-${language}`}>
      <span className="code-block__label">{language}</span>{" "}
      <code className={`language-${language}`}>{Parser(highlightedCode)}</code>
    </pre>
  );
};

export { highlightCodeBlock };
