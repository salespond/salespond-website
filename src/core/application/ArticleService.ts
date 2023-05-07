import ArticleRepository from "@/core/infrastructure/repository/ArticleRepository"
import BlogFeaturedArticleRepository from "@/core/infrastructure/repository/blog/BlogFeaturedArticleRepository"
import BlogCategorySpecificRepository from "@/core/infrastructure/repository/blog/BlogCategorySpecificRepository"
import isEmptyString from "@/core/domain/specification/isEmptyString"
import hasData from "@/core/domain/specification/hasData"

export default class ArticleService {
    protected key = ''

    setKey(key: string) :void {
        if (isEmptyString(key)) {
            throw new TypeError("Slug has not been set")
        }   
        this.key = key
    }

    async process() {
        const { data, totalCount } = await new ArticleRepository(this.key).fetch()
        
        if (!hasData(totalCount)) {
            throw new TypeError("No data was provided")
        }

        return data
    }

    async retrieveFeaturedArticle(categoryId: string, index: string, limit: number) {
        const { data, totalCount } = await new BlogFeaturedArticleRepository(categoryId, index, limit).fetch()

        if (!hasData(totalCount)) {
            throw new TypeError("No data was provided")
        }

        return data
    }

    async retrieveSpecificCategory(categoryId: string) {
        const { data, totalCount } = await new BlogCategorySpecificRepository(categoryId).fetch()

        if (!hasData(totalCount)) {
            throw new TypeError("No data was provided")
        }

        return data
    }
}