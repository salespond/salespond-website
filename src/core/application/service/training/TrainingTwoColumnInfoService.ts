import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import TrainingTwoColumnInfo from '@/core/infrastructure/repository/training/TrainingTwoColumnInfo'
import hasData from '@/core/domain/specification/hasData'

export default class TrainingTwoColumnInfoService implements ServiceInterface {
  constructor() {
    this.trainingTwoColumnInfo = new TrainingTwoColumnInfo()
  }

  async process() {
    const { data, totalCount } = await this.trainingTwoColumnInfo.fetch()

    if (!hasData(totalCount)) {
      throw new Error('No data was provided')
    }

    return data
  }

  private readonly trainingTwoColumnInfo: TrainingTwoColumnInfo
}
