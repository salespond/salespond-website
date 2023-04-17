import type ServiceInterface from '@/core/domain/contract/ServiceInterface';
import HeroBanner from '@/core/infrastructure/repository/home/HeroBanner';
import hasData from '@/core/domain/specification/hasData';

export default class HomeBannerService implements ServiceInterface {
  constructor() {
    this.heroBanner = new HeroBanner();
  }

  async process() {
    const { data, totalCount } = await this.heroBanner.fetch();

    if (!hasData(totalCount)) {
      throw new Error('No data was provided');
    }

    return data;
  }

  private readonly heroBanner: HeroBanner;
}