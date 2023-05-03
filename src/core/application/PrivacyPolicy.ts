import PrivacyPolicyContent from "../infrastructure/repository/privacy_policy/PrivacyPolicyContent"
import hasData from "@/core/domain/specification/hasData"

export default class PrivacyPolicy {
    privacyPolicy: PrivacyPolicyContent

    constructor() {
        this.privacyPolicy = new PrivacyPolicyContent()
    }

    async getAllData() {
        const { data, totalCount } = await this.privacyPolicy.fetch()

        if (!hasData(totalCount)) {
            throw new TypeError("No data was provided")
        }

        return data
    }
}