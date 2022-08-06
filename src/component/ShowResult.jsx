import { atomTextState } from "../atom"
import { useRecoilState } from "recoil"

export const ShowResult = () => {
  const [text, setText] = useRecoilState(atomTextState)
  return <p>결과 : {text}</p>
}
