import { ref } from "vue";

export const registerUser = ref({
    name: '',
    email: '',
    password: '',
    password2: '',
    role: ''
})


export const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== registerUser.value.password) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};


export const registerRules = ref({
    name: [
        {
            message: "用户名不能为空...",
            required: true,
            trigger: "blur",
        },
        {
            min: 2,
            max: 30,
            message: "长度在2到30个字符",
            trigger: "blur",
        },
    ],
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
            message: "密码不能为空...",
            trigger: "blur",
        },
        {
            min: 6,
            max: 30,
            message: "长度在6到30个字符...",
            trigger: "blur",
        },
    ],
    password2: [
        {
            required: true,
            message: "确认密码不能为空...",
            trigger: "blur",
        },
        {
            min: 6,
            max: 30,
            message: "长度在6到30个字符...",
            trigger: "blur",
        }, {validator: validatePass2, trigger: 'blur'}
    ]
})
