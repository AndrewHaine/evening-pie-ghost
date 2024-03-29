import React, { Component } from "react";

import ProgressiveFadeImage from "../core/ProgressiveFadeImage";
import { applyCloudinaryTransformations } from "../lib/helpers/utils";

class Home extends Component {
  constructor(props) {
    super(props);

    const { post } = props;

    this.state = {
      fullHeaderImage: applyCloudinaryTransformations(post.feature_image, {
        width: 2150,
        height: 1100,
        crop: "fill"
      }),
      placeholderImage: applyCloudinaryTransformations(post.feature_image, {
        width: 215,
        height: 110,
        effect: "blur:300",
        crop: "fill"
      })
    };
  }
  render() {
    const props = this.props;
    return (
      <div className="post_header">
        <div className="post_header__meta">
          <a
            href={props.author.website}
            target="_blank"
            rel="noopener"
            className="post_header__author post_author"
          >
            <figure className="post_author__image">
              <img
                src={props.author.profile_image}
                alt={`${props.author.name}'s Image`}
              />
            </figure>
            <span className="post_author__name">{props.author.name}</span>
          </a>
          <div className="post_header__stats">
            <div className="post_header__stat">
              <svg
                className="stat__icon fa__inline fa fa-eye"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"
                />
              </svg>
              <span className="stat__figure">1.7k</span>
            </div>
            <div className="post_header__stat">
              <svg
                className="stat__icon fa__inline fa fa-comment"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M574.974 456.027C571.316 470.142 558.579 480 543.997 480c-50.403 0-89.979-17.891-120.173-36.08-52.13 14.137-111.916 12.816-165.659-7.041 30.755-1.501 60.734-6.803 88.917-15.594 27.598.54 55.154-3.378 81.424-12.21C459.19 429.076 495.998 448 543.997 448c-36-20-46.846-40.709-51.84-73.558C521.775 350.182 544 315.677 544 274.667c0-20.701-5.766-40.458-16.102-58.393.63-20.166-2.137-40.218-8.195-59.885C553.772 187.01 576 228.3 576 274.667c0 40.744-17.163 79.583-48.727 111.119 4.471 14.284 12.703 23.374 32.264 34.241 12.747 7.081 19.095 21.884 15.437 36zM240.002 64C126.033 64 32.003 130.245 32.003 210.667c0 41.011 24.074 75.515 56.16 99.775C82.753 343.291 71.003 364 32.003 384c52 0 91.875-18.924 125.116-38.925 26.268 8.152 54.145 12.258 82.883 12.258 114.09 0 207.998-66.251 207.998-146.666C448 130.849 354.931 64 240.002 64m0-32C371.039 32 480 110.723 480 210.667c0 100.271-109.385 178.667-239.998 178.667-27.008 0-53.354-3.281-78.521-9.767C129.047 397.794 86.365 416 32.003 416c-14.78 0-27.637-10.122-31.106-24.489-3.469-14.367 3.352-29.241 16.504-35.985 24.597-12.614 31.223-22.729 35.047-33.299C18.473 290.687.004 251.705.004 210.667.003 110.39 109.504 32 240.002 32z"
                />
              </svg>
              <span className="stat__figure">0</span>
            </div>
          </div>
        </div>
        <figure className="post_header__image">
          <ProgressiveFadeImage
            placeholder={this.state.placeholderImage}
            src={this.state.fullHeaderImage}
            className="post_header__image_el"
            alt={props.post.title}
          />
        </figure>
      </div>
    );
  }
}

export default Home;
