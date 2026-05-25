import { config as base } from "@perpetual-futures/eslint-config/base";
import { config as reactInternal } from "@perpetual-futures/eslint-config/react-internal";
import { nextJsConfig as next } from "@perpetual-futures/eslint-config/next-js";

export default [...base, ...reactInternal, ...next];
