// Takes in a standard root link and appends the ghost endpoint specified in the config

import config from "../../../config.js";

const formatContentLink = url => config.GHOST_ENDPOINT + url;

export { formatContentLink };
