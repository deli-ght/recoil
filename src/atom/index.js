import { atom, selector } from "recoil"
export const atomTextState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
})

export const selectorText = selector({
  key: "selectorText", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(atomTextState)
    let result = ""

    switch (text) {
      case "월":
      case "화":
      case "수":
      case "목":
      case "금":
        result = "출근하는 날"
        break
      case "토":
      case "일":
      default:
        result = "쉬는 날!!!!!"
    }
    return result
  },
})
