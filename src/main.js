import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import './scripts/comments'
import './scripts/form'
import './scripts/menu'
import './scripts/overlay'
import './scripts/parallax'
import './scripts/skills'
import './scripts/works'