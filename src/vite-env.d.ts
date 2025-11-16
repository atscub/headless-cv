/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.yaml?raw' {
  const content: string;
  export default content;
}
