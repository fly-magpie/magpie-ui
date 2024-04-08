import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poiret-one";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/raleway";


const Theme = extendTheme({
  fonts: {
    heading: `'Poiret One', sans-serif`,
    body: `'Open Sans',system-ui`,
  },
});

export default Theme;
