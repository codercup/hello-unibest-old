import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IUserInfo } from '../typings'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ nickname: '', avatar: '' })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = undefined
    }

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
