import { CollectionConfig } from "payload/types";

const Properties: CollectionConfig = {
  slug: "properties",
  fields: [
    {
      type: "row",
      fields: [
        {
          type: "group",
          name: "property",
          fields: [
            {
              type: "text",
              name: "name",
            },
            {
              name: "type",
              type: "text",
              required: true,
            },
            {
              name: "sqft",
              type: "number",
              required: true,
            },
            {
              name: "price",
              type: "number",
              required: true,
            },
            {
              type: "row",
              fields: [
                {
                  type: "number",
                  name: "beds",
                },
                {
                  type: "number",
                  name: "bathrooms",
                },
              ],
            },
          ],
        },
        {
          name: "contact",
          type: "group",
          fields: [
            {
              name: "phone",
              type: "text",
              required: true,
            },
            // {
            //   name: "email",
            //   type: "email",
            // },
          ],
        },
      ],
    },
    {
      name: "location",
      type: "group",
      fields: [
        {
          name: "address",
          type: "text",
          required: true,
        },
        {
          name: "city",
          type: "text",
          required: true,
        },
        {
          name: "state",
          type: "text",
          required: true,
        },
        {
          name: "zip",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "amenities",
      type: "array",
      fields: [
        {
          name: "amenity",
          type: "text",
        },
      ],
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "propertyImage", // required
          type: "upload", // required
          relationTo: "property-images", // required
        },
      ],
    },
  ],
  // admin: {
  //   components: {
  //     views: {
  //       Edit: CustomEditView,
  //     },
  //   },
  // },
};

// const Agents: CollectionConfig = {
//   slug: "agents",
//   fields: [
//     {
//       name: "name",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "phone",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "email",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "properties",
//       type: "array",
//       fields: [
//         {
//           name: "property",
//           type: "relationship",
//           relationTo: "properties",
//           required: true,
//         },
//       ],
//     },
//   ],
// };

export default Properties;
