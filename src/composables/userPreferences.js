import { ref, watch } from 'vue'
export function useUserPreferences() {
  const seeUnreadPosts = ref(localStorage.getItem('seeUnread') === 'true')

  watch(seeUnreadPosts, (newValue) => {
    localStorage.setItem('seeUnread', newValue)
  })

  return { seeUnreadPosts }
}
