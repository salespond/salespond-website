import QueryBuilder from "../../QueryBuilder"

export default class BlogCategorySpecificRepository {
    static contentName = 'blogCategory'
    constructor(protected key: string) { }

    async fetch() {
        const results = await new QueryBuilder()
            .rawQuery(`*[_type == '${BlogCategorySpecificRepository.contentName}' && _id == '${this.key}'][0] { blog_category }`)
            .process()

        return results.getResultInfo()
    }
}