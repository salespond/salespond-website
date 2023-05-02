import type ServiceInterface from "@/core/domain/contract/ServiceInterface"
import ResourceBlog from "@/core/infrastructure/repository/resource/ResourceBlog"
import hasData from "@/core/domain/specification/hasData"

export default class ResourcesBlogListService implements ServiceInterface {
  constructor() {
    this.resourceBlog = new ResourceBlog()
  }

  async process() {
    const { data, totalCount } = await this.resourceBlog.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError("No data was provided")
    }

    return data
  }

  protected readonly resourceBlog: ResourceBlog
}