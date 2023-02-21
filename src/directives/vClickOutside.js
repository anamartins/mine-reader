export default {
  mounted: (e, binding) => {
    console.log('b', binding)
    function onDocumentClick(event) {
      if (!e.contains(event.target)) {
        binding.value()
        document.removeEventListener('click', onDocumentClick)
      }
    }

    document.addEventListener('click', onDocumentClick)
  }
}
