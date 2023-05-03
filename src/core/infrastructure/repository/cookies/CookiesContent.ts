import UtilityPageRepository from "../UtilityPageRepository"

export default class CookiesContent extends UtilityPageRepository {
    static schemaId = 'utility_cookies'

    constructor() {
        super(CookiesContent.schemaId)
    }
}