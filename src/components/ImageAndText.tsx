import * as React from "react"

interface IImageAndText {
  img: string;
  title: string;
  subtitle: string;
  text: string;
  timeframe: string;
}

const ImageAndText: React.FC<IImageAndText> = () => (
  <p>
    test
  </p>
)

export default ImageAndText
