import { languages, highlight } from "prismjs";
import Parser from "html-react-parser";
import ProgressiveFadeImage from "../../core/ProgressiveFadeImage";
import { applyCloudinaryTransformations } from "../../lib/helpers/utils";

// Utility functions
const _getClasses = node => node.attribs.class.split(" ");

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

const cloudinaryImageBlock = node => {
  const classes = _getClasses(node);

  // Get the first image element and it's adjacent caption
  const image = node.children.filter(child => child.name === "img")[0];
  const caption = image.next && image.next.name === "figcaption" && image.next;

  let imageWidth;
  switch (true) {
    case classes.indexOf("kg-image-wide"):
      imageWidth = 1416;
      break;
    case classes.indexOf("kg-image-full"):
      imageWidth = 1706;
      break;
    default:
      imageWidth = 1200;
  }

  return (
    <figure className={node.attribs.class}>
      <ProgressiveFadeImage
        src={applyCloudinaryTransformations(image.attribs.src, {
          width: imageWidth,
          crop: "scale"
        })}
        placeholder={applyCloudinaryTransformations(image.attribs.src, {
          width: imageWidth / 15,
          crop: "scale",
          effect: "blur:400"
        })}
      />
      {caption && (
        <figcaption className={caption.attribs.class}>
          {caption.children[0].data}
        </figcaption>
      )}
    </figure>
  );
};

export { highlightCodeBlock, cloudinaryImageBlock };
