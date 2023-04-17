export default interface HomeModel {
  homeBanner: {
    banner_label?: string,
    banner_text?: string,
    subheader_text?: string,
    cta_text?: string,
    cta_redirection?: string,
    image_panel?: object,
  },
  twoColumnFirstSection: {
    banner_text?: string,
    block_content?: object,
    cta_1?: string,
    cta_2?: string,
    image_section?: object,
  },
  twoColumnSecondSection: {
    banner_text?: string,
    block_content?: object,
    cta_1?: string,
    cta_2?: string,
    image_section?: object,
  },
  twoColumnThirdSection: {
    banner_text?: string,
    block_content?: object,
    cta_1?: string,
    cta_2?: string,
    image_section?: object,
  }
}