export const createRouterPath = (path: string) => {
  if (typeof import.meta.env.VITE_BASENAME === 'string') {
    return `${import.meta.env.VITE_BASENAME}${path}`;
  } else {
    return path;
  }
};
