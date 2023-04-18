import QueryBuilder from "../QueryBuilder"

export default class CalloutRepository {
    constructor(protected contentName: string) {} 

    async fetch() {
        const results = await new QueryBuilder()
            .buildQuery(this.contentName, [
                'banner_text',
                'text_highlight',
                'block_content',
                'cta_enabled',
                'cta_text',
                'cta_redirection',
                "image_panel",
            ])
            .process()

        return results.getResultInfo()
    }
}