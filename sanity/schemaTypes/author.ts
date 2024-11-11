import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "username",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});

// import { UserIcon } from "lucide-react";
// import { defineField, defineType } from "sanity";

// export const author = defineType(schemaDefination:{
//     name:"Author",
//     title:"Autor",
//     type:"document",
//     icon:UserIcon,
//     fields:[
//         defineField(schemaField:{
//             name:'id',
//             type:"number"
//         })
//         defineField(schemaField:{
//             name:"name",
//             type:"string"
//         })
//     ]
// });
