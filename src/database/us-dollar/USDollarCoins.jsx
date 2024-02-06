import { images } from "../../assets/catalog"

const usDollarCoins = [
  {
    moneyName: "Nickel",
    moneyDescription:
      "The nickel coin in the United States, worth five cents, often depicts Thomas Jefferson's likeness on the obverse and the famous image of Monticello, Jefferson's historic plantation, on the reverse. The nickel coin, made of a copper-nickel alloy, stands out for its smooth edge and unusual size. The nickel coin, widely circulated and utilized in everyday transactions, is a fundamental unit of American currency that reflects the country's history and enduring values.",
    obverse: images.NickelObverse,
    reverse: images.NickelReverse,
  },
  {
    moneyName: "Penny",
    moneyDescription:
      "The penny coin of the United States, worth one cent, prominently shows Abraham Lincoln's profile on the obverse and the Lincoln Memorial on the reverse. The penny, made primarily of zinc with a copper plating, is distinguished by its reddish hue and diminutive size. The penny, which is widely circulated and frequently used in daily transactions, is symbolic of American history and tenacity, reflecting the country's enduring values and principles.",
    obverse: images.PennyObverse,
    reverse: images.PennyReverse,
  },
]
export default usDollarCoins
