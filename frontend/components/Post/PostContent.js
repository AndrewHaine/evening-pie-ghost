import React, { Component } from "react";
import { languages, highlight } from "prismjs";
import he from "he";

class PostContent extends Component {
  constructor(props) {
    super(props);

    this.state = { content: this.parseCodeBlocks(this.props.post.html) };
  }
  /**
   * This moves the prismjs highlighting onto the server
   * @param { String } content
   */
  parseCodeBlocks(content) {
    const decodedContent = he.decode(content);
    const regex = /<pre><code class="language-([a-zA-Z]+)">([\s\S]+?)<\/code><\/pre>/gi;
    const parsedHTML = decodedContent.replace(
      regex,
      (match, language, code) => {
        const highlightedCode = highlight(code, languages[language]);
        return `<pre class="code-block language-${language}"><span class="code-block__label">${language}</span><code class="language-${language}">${highlightedCode}</code></pre>`;
      }
    );
    return parsedHTML;
  }
  render() {
    return (
      <section
        className="post__main wysiwyg"
        dangerouslySetInnerHTML={{
          __html: this.state.content
        }}
      />
    );
  }
}

export default PostContent;
