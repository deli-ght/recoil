import { useRecoilValue } from "recoil"
import { selectorText } from "../atom"

export const ShowSelector = () => {
  const weekend = useRecoilValue(selectorText)
  return <p>{weekend}</p>
}
