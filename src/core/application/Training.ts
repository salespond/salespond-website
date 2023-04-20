import TrainingHeroBannerService from './service/training/TrainingHeroBannerService'
import TrainingTwoColumnInfoService from './service/training/TrainingTwoColumnInfoService'
import TrainingCalloutService from './service/training/TrainingCalloutService'

export default class ContactUs {
  constructor() {
    this.trainingHeroBannerService = new TrainingHeroBannerService()
    this.trainingTwoColumnInfoService = new TrainingTwoColumnInfoService()
    this.trainingCalloutService = new TrainingCalloutService()
  }

  async getAllData() {
    const heroBanner = await this.trainingHeroBannerService.process()
    const twoColumnInfo = await this.trainingTwoColumnInfoService.process()
    const callout = await this.trainingCalloutService.process()

    return {
      heroBanner,
      twoColumnInfo,
      callout
    }
  }

  private readonly trainingHeroBannerService: TrainingHeroBannerService
  private readonly trainingTwoColumnInfoService: TrainingTwoColumnInfoService
  private readonly trainingCalloutService: TrainingCalloutService
}
