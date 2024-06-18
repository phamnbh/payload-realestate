import { CollectionConfig } from "payload/types";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed'
    {
      name: "slider", // required
      type: "array", // required
      label: "Image Slider",
      minRows: 2,
      maxRows: 10,
      interfaceName: "CardSlider", // optional
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      fields: [
        // required
        {
          name: "title",
          type: "text",
        },
        {
          name: "caption",
          type: "text",
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.title || `Slide ${String(index).padStart(2, "0")}`;
          },
        },
      },
    },
  ],
};

export default Users;
