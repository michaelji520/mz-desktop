declare module '*.less' {
  const content: { [className: string]: string}
  export default content;
}

declare module '*.style' {
  const content: { [className: string]: string}
  export default content;
}

declare module '*.jfif';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';