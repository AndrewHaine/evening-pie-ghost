import React, { Component } from "react";

import ProgressiveFadeImage from "../core/ProgressiveFadeImage";
import { applyCloudinaryTransformations } from "../lib/helpers/utils";

class PostPreview extends Component {
  constructor(props) {
    super(props);

    const { data } = props;

    this.state = {
      fullHeaderImage: applyCloudinaryTransformations(data.feature_image, {
        width: data.featured ? 2150 : 2150,
        height: data.featured ? 1100 : 1100,
        crop: "fill"
      }),
      placeholderImage: applyCloudinaryTransformations(data.feature_image, {
        width: data.featured ? 215 : 215,
        height: data.featured ? 110 : 110,
        effect: "blur:300",
        crop: "fill"
      })
    };
  }

  render() {
    const { data } = this.props;

    console.log(data);

    return (
      <a
        className={`post-preview ${this.props.featured &&
          "post-preview--featured"}`}
      >
        <div className="post-preview__image">
          <ProgressiveFadeImage
            placeholder={this.state.placeholderImage}
            src={this.state.fullHeaderImage}
            className="post_header__image_el"
            alt={data.title}
          />
        </div>
      </a>
    );
  }
}

export default PostPreview;
