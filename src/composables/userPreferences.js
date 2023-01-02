import axios from 'axios'
import { ref, watch } from 'vue'
export function useUserPreferences() {
  const isUnread = ref(localStorage.getItem('seeUnread') === 'true')

  watch(isUnread, (newValue) => {
    localStorage.setItem('seeUnread', newValue)
  })

  return { isUnread }
}
