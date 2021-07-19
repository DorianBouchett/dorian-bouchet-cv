import * as React from "react"

interface IQuote {
  quote: string;
  theme: "dark" | "white";
}

const Quote: React.FC<IQuote> = () => (
  <p>
    test
  </p>
)

export default Quote
