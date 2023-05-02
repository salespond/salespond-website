import ResourcesHeroBannerService from "./service/resources/ResourcesHeroBannerService"
import ResourcesCalloutService from "./service/resources/ResourcesCalloutService"
import ResourcesBlogListService from "./service/resources/ResourcesBlogListService"
import BlogCategoryService from "./service/blog/BlogCategoryService"

export default class Resource {
  constructor() {
    this.resourcesHeroBannerService = new ResourcesHeroBannerService()
    this.resourcesCalloutService = new ResourcesCalloutService()
    this.resourcesBlogListService = new ResourcesBlogListService()
    this.blogCategoryService = new BlogCategoryService()
  }

  async getAllData() {
    const heroBanner = await this.resourcesHeroBannerService.process()
    const callout = await this.resourcesCalloutService.process()
    const blogList = await this.resourcesBlogListService.process()
    const blogCategory = await this.blogCategoryService.process()

    return {
      heroBanner,
      callout,
      blogList,
      blogCategory,
    }
  }

  protected readonly resourcesHeroBannerService: ResourcesHeroBannerService
  protected readonly resourcesCalloutService: ResourcesCalloutService
  protected readonly resourcesBlogListService: ResourcesBlogListService
  protected readonly blogCategoryService: BlogCategoryService
}
