import { buildConfig } from "payload/config";
import { CollectionConfig } from "payload/types";
import CustomEditView from "../views/CustomEditView.jsx";

const Properties: CollectionConfig = {
  slug: "properties",
  fields: [
    {
      name: "Property",
      type: "group",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
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
      name: "type",
      type: "text",
      required: true,
    },
    {
      name: "units",
      type: "number",
      required: true,
    },
    {
      name: "amenities",
      type: "array",
      fields: [
        {
          name: "amenity",
          type: "text",
          required: true,
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
        {
          name: "email",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "text",
          required: true,
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
