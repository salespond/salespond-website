import { GrNavigate } from "react-icons/gr";

export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: "text",
            type: "string",
            title: "Navigation Text"
          },
          {
            name: 'externalUrl',
            title: 'External URL',
            description:"Use fully qualified URLS for external link",
            type: 'url',
          }
    ]
}