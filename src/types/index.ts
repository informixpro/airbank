import ParsedContent from '@nuxt/content'

export interface IMeta {
  title: string
}

export interface IArticle {
  title: string
  description: string
  date: string
}

export interface IContent extends ParsedContent{
  meta: IMeta
}
