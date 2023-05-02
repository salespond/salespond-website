import type ServiceInterface from "@/core/domain/contract/ServiceInterface"
import BlogCategoryRepository from "@/core/infrastructure/repository/BlogCategoryRepository"
import hasData from "@/core/domain/specification/hasData"

export default class BlogCategoryService implements ServiceInterface {
  constructor() {
    this.blogCategoryRepository = new BlogCategoryRepository()
  }

  async process() {
    const { data, totalCount } = await this.blogCategoryRepository.fetch()

    if (!hasData(totalCount)) {
      throw new TypeError("No data was provided")
    }

    return data
  }

  protected blogCategoryRepository: BlogCategoryRepository
}