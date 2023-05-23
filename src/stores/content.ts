import { defineStore } from 'pinia'
import type { IContent } from '@/types'

export const useContentStore = defineStore('content', () => {
  const content: Ref<IContent | null> = ref(null);
  const getContent = async () => {
    content.value = await queryContent<IContent>('content').findOne()
  }
  return { content, getContent }
});
