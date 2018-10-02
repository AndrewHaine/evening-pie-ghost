// This is the slanted page top containing titles and subtitles

import ReactMarkdown from "react-markdown";

const PageTop = props => (
  <header className={`page_top page_top--${props.pagetype}`}>
    <div className="page_top__content">
      {props.pagetype === "post" && (
        <time datetime={props.datestamp.raw} className="page_top__datestamp">
          {props.datestamp.pretty}
        </time>
      )}
      <h1 class="page_top__title">{props.title}</h1>
      {props.intro && (
        <ReactMarkdown className="page_top__intro" source={props.intro} />
      )}
    </div>
  </header>
);

export default PageTop;
