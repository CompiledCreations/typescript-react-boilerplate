declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.module.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
