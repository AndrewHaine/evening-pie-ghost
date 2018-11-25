import PageTop from "../core/PageTop";
import PostPreview from "../../components/Post/PostPreview";

const Home = props => (
  <div className="home_container">
    <PageTop
      title="Grab a slice"
      intro="Find tasty web development news and tutorials here at **evening pie**"
      pagetype="home"
    />
    <div className="site_width index__posts_container">
      <PostPreview key={props.featured_post.uuid} data={props.featured_post} />
    </div>
  </div>
);

export default Home;
