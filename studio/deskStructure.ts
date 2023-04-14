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
                .title("Contact Us Content")
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
    ])
