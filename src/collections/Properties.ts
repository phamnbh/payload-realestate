import { CollectionConfig } from "payload/types";
import { useState } from "react";

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
  hooks: { afterChange: [] },
  admin: {
    components: {},
  },
};

export default Properties;
