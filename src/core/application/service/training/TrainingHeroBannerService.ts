import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import TrainingHeroBanner from '@/core/infrastructure/repository/training/TrainingHeroBanner'
import hasData from '@/core/domain/specification/hasData'

export default class TrainingHeroBannerService implements ServiceInterface {
  constructor() {
    this.trainingHeroBanner = new TrainingHeroBanner()
  }

  async process() {
    const { data, totalCount } = await this.trainingHeroBanner.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly trainingHeroBanner: TrainingHeroBanner
}
