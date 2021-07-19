import * as React from "react"

interface ITitle1 {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  flag: string;
}

const Title1: React.FC<ITitle1> = () => (
  <p>
    test
  </p>
)

export default Title1
