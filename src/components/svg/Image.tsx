// packages
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export default function Image(props: SvgProps) {
  return (
    <Svg
      width={480}
      height={100}
      viewBox="0 0 48 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M0 0h48v1H0z" fill="#000" fillRule="evenodd" />
    </Svg>
  )
}
