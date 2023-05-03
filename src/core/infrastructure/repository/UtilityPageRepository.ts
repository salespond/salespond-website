import QueryBuilder from "../QueryBuilder"

export default class UtilityPageRepository {

    constructor(protected contentName: string) {} 

    async fetch() {
        const results = await new QueryBuilder()
            .buildQuery(this.contentName, [
                "banner_text",
                "subheader_text",
                "pageContent",
            ])
            .process()

        return results.getResultInfo()
    }
}
