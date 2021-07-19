import * as React from "react"

interface IHeaderProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  img: string;
  svgOn: boolean;
}

const Header: React.FC<IHeaderProps> = () => (
  <p>
    test
  </p>
)

export default Header
