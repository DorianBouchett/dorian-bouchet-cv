import * as React from "react"

interface IHeaderProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  img: string;
  svgOn: boolean;
}

const Header: React.FC<IHeaderProps> = ({ h1, h2, h3, h4, img, svgOn }) => (
  <div className={"header"}>
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    <div>
      <div>
        <h3>{h3}</h3>
        <p>{h4}</p>
      </div>
      <img src={img}/>
    </div>
  </div>
)

export default Header
