import { createClient } from '@sanity/client'

export default createClient({
    projectId: "0w6ohht0",
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21"
})