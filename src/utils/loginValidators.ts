import { ref } from "vue";

// interface User {
//   email: string;
//   password: string;
// }

export const loginUser = ref({
// export const loginUser = ref<User>({
  email: "",
  password: "",
});

// interface Rules {
//   email: {
//     type: string;
//     message: string;
//     required: boolean;
//     trigger: string;
//   }[];
//   password: ({
//     required: boolean;
//     message: string;
//     trigger: string;
//     min?: undefined;
//     max?: undefined;
//   } | {
//     min: number;
//     max: number;
//     message: string;
//     trigger: string;
//     required?: undefined;
//   })[];
// }

// 校验规则
export const rules = ref({
// export const rules = ref<Rules>({
  email: [
    {
      type: "email",
      message: "请输入正确格式的电子邮箱...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码必须在6~30个字符之间...",
      trigger: "blur",
    },
  ],
});
