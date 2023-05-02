import get from 'lodash/get'
import type BlogArticleModel from "@/core/domain/model/BlogArticleModel"

export default class ResourcesFilterCategory {
    protected selectedCategory = ''
    protected articles: BlogArticleModel[] = []
    protected keywords = ''

    setCategory(selectedCategory: string) {
        this.selectedCategory = selectedCategory
        return this
    }

    setArticles(articles: BlogArticleModel[]) {
        this.articles = articles
        return this
    }

    setKeywords(keywords: string) {
        this.keywords = keywords
        return this
    }

    filter() {
        const categoryId = this.selectedCategory
        const articles = this.articles
        const keywords = this.keywords

        console.info(categoryId)

        const filtered = articles.map((article, key) => {
            const bannerText = article.bannerText.toLowerCase()
            const categoryMatched = categoryId === get(article, 'blogCategoryOption._ref')
            const keywordsMatched = bannerText.includes(keywords.toLowerCase())

            if (categoryId === 'all') {
                if (keywordsMatched) {
                    return articles[key]
                }
            } else {
                if (categoryMatched && keywordsMatched) {
                    return articles[key]
                }
            }

            return null
        }).filter(Boolean)

        console.info(filtered)
        return filtered
    }
}
