import cloudinary from "cloudinary-core";

const applyCloudinaryTransformations = (url = "", transformation = {}) => {
  const cl = new cloudinary.Cloudinary({ cloud_name: "andrewhaine" });
  const transformedURL = url.split("/v1/")[1];
  return cl.url(transformedURL, transformation);
};

export { applyCloudinaryTransformations };
