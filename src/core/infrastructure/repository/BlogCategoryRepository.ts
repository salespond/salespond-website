import QueryBuilder from "../QueryBuilder"

export default class BlogCategoryRepository {
    async fetch() {
        const results = await new QueryBuilder()
            .rawQuery(`*[_type == 'blogCategory'] { _id, 'category': blog_category }`)
            .process()

        return results.getResultInfo()
    }
}