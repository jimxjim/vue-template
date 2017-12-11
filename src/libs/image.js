export function loadPic(url, cb) {
  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();

    img.onload = () => {
      // the original image is loaded.
      const that = this;
      const imgCompressed = new Image();
      const oCanvas = document.createElement('canvas');
      const oCtx = oCanvas.getContext('2d');

      oCanvas.width = that.width;
      oCanvas.height = that.height;

      oCtx.drawImage(img, 0, 0, oCanvas.width, oCanvas.height);

      imgCompressed.onload = cb;
      imgCompressed.src = oCanvas.toDataURL('image/jpeg'); // loading the compressed image.
    };

    img.src = e.target.result; // loading the original image.
  };

  reader.readAsDataURL(url);
}

export function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
