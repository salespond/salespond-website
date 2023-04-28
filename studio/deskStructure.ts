/*
  This file contains a large tree function.
  Please maintain 2spaces tabs spacing for better readability
  
*/

// import S from "@sanity/desk-tool/structure-builder"

export default (S: any) =>
  S.list()
    .title("Pages")
    .items([
      // Home
      S.listItem()
        .title("Home Page")
        .child(
          S.list()
            .title("Document List")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('banner').documentId('home_banner')
                ),
              S.listItem()
                .title("Two Section Content 1")
                .child(
                  S.document().schemaType('twoSectionContent').documentId('home_twoSectionContent')
                ),
              S.listItem()
                .title("Two Section Content 2")
                .child(
                  S.document().schemaType('twoSectionContent').documentId('home_twoSectionContent2')
                ),
              S.listItem()
                .title("Two Section Content 3")
                .child(
                  S.document().schemaType('twoSectionContent').documentId('home_twoSectionContent3')
                ),
              S.listItem()
                .title("Contact Us")
                .child(
                  S.document().schemaType('simpleBanner').documentId('home_simpleBanner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('home_callout')
                ),
            ])
        ),

      // Sales Acceleration
      S.listItem()
        .title("Sales Acceleration")
        .child(
          S.list()
            .title("Document List")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('sales_banner')
                ),
              S.listItem()
                .title("Two Section Content")
                .child(
                  S.document().schemaType('infoContent').documentId('sales_twoSectionContent')
                ),
              S.listItem()
                .title("Contact Us")
                .child(
                  S.document().schemaType('simpleBanner').documentId('home_simpleBanner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('sales_callout')
                ),
            ])
        ),

      // Marketing
      S.listItem()
        .title("Marketing")
        .child(
          S.list()
            .title("Document List")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('marketing_banner')
                ),
              S.listItem()
                .title("Two Section Content")
                .child(
                  S.document().schemaType('infoContent').documentId('marketing_twoSectionContent')
                ),
              S.listItem()
                .title("Contact Us")
                .child(
                  S.document().schemaType('simpleBanner').documentId('home_simpleBanner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('marketing_callout')
                ),
            ])
        ),

      // Channel
      S.listItem()
        .title("Channel")
        .child(
          S.list()
            .title("Document List")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('channel_banner')
                ),
              S.listItem()
                .title("Two Section Content")
                .child(
                  S.document().schemaType('infoContent').documentId('channel_twoSectionContent')
                ),
              S.listItem()
                .title("Contact Us")
                .child(
                  S.document().schemaType('simpleBanner').documentId('home_simpleBanner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('channel_callout')
                ),
            ])
        ),

      // Training
      S.listItem()
        .title("Training")
        .child(
          S.list()
            .title("Document List")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('training_banner')
                ),
              S.listItem()
                .title("Two Section Content")
                .child(
                  S.document().schemaType('infoContent').documentId('training_twoSectionContent')
                ),
              S.listItem()
                .title("Contact Us")
                .child(
                  S.document().schemaType('simpleBanner').documentId('home_simpleBanner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('training_callout')
                ),
            ])
        ),

      // Company
      S.listItem()
        .title("Company")
        .child(
          S.list()
            .title("Fields")
            .items([
              S.listItem()
                .title("Hero Banner")
                .child(
                  S.document().schemaType('banner').documentId('company_banner')
                ),
              S.listItem()
                .title("Company Seal")
                .child(
                  S.document().schemaType('twoColumnSimple').documentId('company_twoColumnSimple')
                ),
              S.listItem()
                .title("Our Story")
                .child(
                  S.document().schemaType('twoColumnTextContent').documentId('company_twoColumn')
                ),
              S.listItem()
                .title("Partners")
                .child(
                  S.document().schemaType('clientSection').documentId('company_clientSection')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('company_callout')
                ),
            ])
        ),

      // Resources
      S.listItem()
        .title("Resources")
        .child(
          S.list()
            .title("Fields")
            .items([
              S.listItem()
                .title("In-Page Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('resource_banner')
                ),
              S.listItem()
                .title("Callout")
                .child(
                  S.document().schemaType('callout').documentId('resource_callout')
                ),
              S.listItem()
                .title("Blog Article")
                .child(
                  S.document().schemaType('blogResource').documentId('resource_blogResource')
                ),
            ])
        ),

      // Contact Us Page
      S.listItem()
        .title("Contact Us")
        .child(
          S.list()
            .title("Fields")
            .items([
              S.listItem()
                .title("In-page Banner")
                .child(
                  S.document().schemaType('subPageBanner').documentId('contact_us_banner')
                ),
              S.listItem()
                .title("Three Column Image")
                .child(
                  S.document().schemaType('threeColumnImageSimple').documentId('contact_us_threeColumnImage')
                ),
              S.listItem()
                .title("Footer Callout")  
                .child(
                  S.document().schemaType('callout').documentId('contact_us_callout')
                ),
            ])
        ),
    ])
