import { ShowResult } from "../component/ShowResult"
import { ShowSelector } from "../component/ShowSelector"
import { TextInput } from "../component/TextInput"

export default function Home() {
  return (
    <div>
      <TextInput />
      <ShowResult />
      <ShowSelector />
    </div>
  )
}
