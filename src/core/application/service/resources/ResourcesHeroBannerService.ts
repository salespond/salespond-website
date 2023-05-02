import ResourceHeroBanner from "@/core/infrastructure/repository/resource/ResourceHeroBanner"
import hasData from "@/core/domain/specification/hasData"

export default class ResourcesHeroBannerService {
  constructor() {
    this.resourceHeroBanner = new ResourceHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.resourceHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError("No data was provided")
    }

    return data
  }

  protected readonly resourceHeroBanner: ResourceHeroBanner
}
