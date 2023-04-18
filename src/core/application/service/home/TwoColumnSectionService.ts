import type ServiceInterface from '@/core/domain/contract/ServiceInterface'
import TwoColumnSection from '@/core/infrastructure/repository/home/TwoColumnSection'

export default class TwoColumnSectionService implements ServiceInterface {
  constructor() {
    this.twoColumnSectionFirst = new TwoColumnSection('home_twoSectionContent')
    this.twoColumnSectionSecond = new TwoColumnSection('home_twoSectionContent2')
    this.twoColumnSectionThird = new TwoColumnSection('home_twoSectionContent3')
  }

  async process() {
    const section1 = await this.twoColumnSectionFirst.fetch()
    const section2 = await this.twoColumnSectionSecond.fetch()
    const section3 = await this.twoColumnSectionThird.fetch()

    return {
      section1: section1.data,
      section2: section2.data,
      section3: section3.data
    }
  }

  private readonly twoColumnSectionFirst: TwoColumnSection
  private readonly twoColumnSectionSecond: TwoColumnSection
  private readonly twoColumnSectionThird: TwoColumnSection
}
