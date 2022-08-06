import { useRecoilState } from "recoil"
import { atomTextState } from "../atom"

export const TextInput = () => {
  const [text, setText] = useRecoilState(atomTextState)
  const handleInput = (event) => {
    setText(event.target.value)
  }
  return <input type="text" value={text} onChange={(e) => handleInput(e)} />
}
