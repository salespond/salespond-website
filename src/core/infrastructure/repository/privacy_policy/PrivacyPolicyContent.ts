import UtilityPageRepository from "../UtilityPageRepository"

export default class PrivacyPolicyContent extends UtilityPageRepository {
    static schemaId = 'utility_privacyPolicy'

    constructor() {
        super(PrivacyPolicyContent.schemaId)
    }
}