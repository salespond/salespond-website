import sanity from '../../client'
import type QueryBuilderResult from './model/QueryBuilderResult'

export default class QueryBuilder {
    private query = ''
    private results: object = {}

    buildQuery(contentTitle = '', fields: string[] = []): this {
        this.query = `*[_id == '${contentTitle}'][0] { ${fields.toString()} }`
        return this
    }

    rawQuery(rawQuery: string): this {
        this.query = rawQuery
        return this
    }

    async process(): Promise<this> {
        this.results = await new Promise<object>((resolve, reject) => {
            sanity.fetch(this.query)
                .then((data: object | PromiseLike<object>) => {
                    return resolve(data)
                })
                .catch((error) => {
                    console.error(`Error getting data from query: ${this.query}`)
                    return reject(error)
                })
        })

        return this
    }

    totalCount(): number {
        return Object.keys(this.results).length
    }

    retrieveResults(): object {
        return Object.freeze(this.results)
    }

    getResultInfo(): QueryBuilderResult {
        return {
            success: true,
            totalCount: this.totalCount(),
            data: this.retrieveResults()
        }
    }

    getDataOnly() {
        return this.retrieveResults()
    }
}
