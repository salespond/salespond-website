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
            ])
        ),
    ])
