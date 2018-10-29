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
      loading: true,
      inView: false
    };

    this.checkViewStatus = this.checkViewStatus.bind(this);
  }

  componentDidMount() {
    this.checkViewStatus();
    window.addEventListener("scroll", this.checkViewStatus);
    window.addEventListener("resize", this.checkViewStatus);
    window.addEventListener("orientationchange", this.checkViewStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkViewStatus);
    window.removeEventListener("resize", this.checkViewStatus);
    window.removeEventListener("orientationchange", this.checkViewStatus);
  }

  checkViewStatus(e) {
    if (!this.imgNode) return false;
    let isInView =
      this.imgNode.getBoundingClientRect().top <= window.innerHeight + 100 &&
      this.imgNode.getBoundingClientRect().bottom >= 0;
    let shouldLoadImage =
      isInView && getComputedStyle(this.imgNode).display !== "none";

    if (shouldLoadImage) {
      const { src } = this.props;
      this.setState({ inView: true });
      this.loadImage(src);
    }
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
    }, 1000);
  };

  removeSelf(e) {
    e.currentTarget.remove();
  }

  render() {
    const { src, placeholder, loading } = this.state;
    const { alt, className } = this.props;
    return (
      <div
        className="progressive-fade-image"
        style={{ position: "relative" }}
        ref={imgNode => (this.imgNode = imgNode)}
      >
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
