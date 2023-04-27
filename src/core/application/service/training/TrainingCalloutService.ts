import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import TrainingCallout from '@/core/infrastructure/repository/training/TrainingCallout'
import hasData from '@/core/domain/specification/hasData'

export default class TrainingCalloutService implements ServiceInterface {
  constructor() {
    this.trainingCallout = new TrainingCallout()
  }

  async process() {
    const { data, totalCount } = await this.trainingCallout.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly trainingCallout: TrainingCallout
}
