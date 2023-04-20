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

      // Sales Acceleration
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

      // Sales Acceleration
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

      // Sales Acceleration
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
    ])
