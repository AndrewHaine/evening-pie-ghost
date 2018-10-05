import dynamic from "next/dynamic";

const ProcessImage = dynamic(import("react-imgpro"), { ssr: false });

import { formatContentLink } from "../../lib/Ghost/utils/formatContentLink";

const Home = props => (
  <div className="post_header">
    <figure className="post_header__image">
      <ProcessImage
        image={formatContentLink(props.post.feature_image)}
        cover={{ width: 400, height: 400, mode: "horizontal_center" }}
      />
    </figure>
  </div>
);

export default Home;
