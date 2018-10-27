import React, { Component } from "react";

/**
 * Progressive image loading with a fade from the placeholder to the full image
 */
class ProgressiveFadeImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder,
      src: props.placeholder,
      loading: true
    };
  }

  componentDidMount() {
    const { src } = this.props;
    this.loadImage(src);
  }

  loadImage(src) {
    if (this.image) {
      this.image.onload = null;
    }

    const imageToLoad = new Image();
    this.image = imageToLoad;
    imageToLoad.onload = this.triggerImageLoad;
    imageToLoad.src = src;
  }

  triggerImageLoad = () => {
    setTimeout(() => {
      this.setState({
        src: this.image.src,
        loading: false
      });
    }, 1500);
  };

  removeSelf(e) {
    e.currentTarget.remove();
  }

  render() {
    const { src, placeholder, loading } = this.state;
    const { alt, className } = this.props;
    return (
      <div className="progressive-fade-image" style={{ position: "relative" }}>
        <img
          onTransitionEnd={this.removeSelf}
          src={placeholder}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: loading ? 1 : 0,
            visibility: loading ? "visible" : "hidden",
            transition: "opacity 300ms ease, visibility 300ms ease"
          }}
        />
        <img src={src} className={className} alt={alt} />
      </div>
    );
  }
}
export default ProgressiveFadeImage;
