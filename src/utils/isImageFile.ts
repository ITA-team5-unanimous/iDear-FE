const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];

export const isImageFile = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  return ext ? IMAGE_EXTENSIONS.includes(ext) : false;
};
