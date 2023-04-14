/*
  This file contains a large tree function.
  Please maintain 2spaces tabs spacing for better readability
  
*/

// import S from "@sanity/desk-tool/structure-builder"

export default (S: any) => 
  S.list()
    .title("Pages")
    .items([
      // Site Settings
    //   S.listItem()
    //     .title("Home")
    //     .child(
    //       S.document().schemaType('banner').documentId('home_banner')
    //     ),
    //   S.divider(),

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
            //   S.listItem()
            //     .title("Callout")
            //     .child(
            //       S.document().schemaType('callout').documentId('home_callout')
            //     ),
            //   S.listItem()
            //     .title("Three Column 1")
            //     .child(
            //       S.document().schemaType('threeColumn').documentId('home_threeColumn3')
            //     ),
            //   S.listItem()
            //     .title("Three Column 2")
            //     .child(
            //       S.document().schemaType('threeColumn').documentId('home_threeColumn1')
            //     ),
            //   S.listItem()
            //     .title("Callout 2")
            //     .child(
            //       S.document().schemaType('callout').documentId('home_callout2')
            //     ),
            //   S.listItem()
            //     .title("Three Column 3")
            //     .child(
            //       S.document().schemaType('threeColumn').documentId('home_threeColumn2')
            //     ),
            //   S.listItem()
            //     .title("Carousel")
            //     .child(
            //       S.document().schemaType('carousel').documentId('home_carousel')
            //     ),
            //   S.listItem()
            //     .title("Callout 3")
            //     .child(
            //       S.document().schemaType('callout').documentId('home_callout3')
            //     ),
            //   S.listItem()
            //     .title("Features")
            //     .child(
            //       // Todo: Find a way to do this dynamically
            //       S.list()
            //         .title("Feature Category")
            //         .items([
            //           S.listItem()
            //             .title("Section Banner")  
            //             .child(
            //               S.document().schemaType('bannerSimple').documentId('home_featureBanner')
            //             ),  
            //           S.listItem()
            //             .title("XDRs")
            //             .child(
            //               S.document().schemaType('feature').documentId('home_feature1')
            //             ),
            //           S.listItem()
            //             .title("Sales and Marketing Leaders")
            //             .child(
            //               S.document().schemaType('feature').documentId('home_feature2')
            //             ),
            //           S.listItem()
            //             .title("Executives")
            //             .child(
            //               S.document().schemaType('feature').documentId('home_feature3')
            //             ),
            //         ])
            //     ),
            //   S.listItem()
            //     .title("Footer Callout")  
            //     .child(
            //       S.document().schemaType('footerCallout').documentId('home_footerCallout')
            //     ),
            ])
        ),
    ])
