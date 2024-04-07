import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poiret-one";
import "@fontsource/open-sans";
import "@fontsource/raleway";



const Theme = extendTheme({
  fonts: {
    heading: `'Poiret One', sans-serif`,
    body: `'Open Sans',system-ui`,
  },
});

export default Theme;
