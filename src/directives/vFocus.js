export default {
  mounted: (e, binding) => {
    if (binding.value) e.focus()
  }
}
