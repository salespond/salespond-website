import SubPageHeroBannerRepository from '../SubPageHeroBannerRepository'

export default class TrainingHeroBanner extends SubPageHeroBannerRepository {
  static schemaId = 'training_banner'

  constructor() {
    super(TrainingHeroBanner.schemaId)
  }
}
