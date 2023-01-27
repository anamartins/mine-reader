export function getColors() {
  const primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--primary-color')

  const primaryColorVariation = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--primary-color-variation')

  const secondaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--secondary-color')

  const secondaryColorVariation = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--secondary-color-variation')

  const backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--background-color')

  const surfaceColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--surface-color')

  const borderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--border-color')

  const darkTextColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--dark-text')

  const lightTextColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--light-text')

  return {
    primaryColor,
    primaryColorVariation,
    secondaryColor,
    secondaryColorVariation,
    backgroundColor,
    surfaceColor,
    borderColor,
    darkTextColor,
    lightTextColor
  }
}
