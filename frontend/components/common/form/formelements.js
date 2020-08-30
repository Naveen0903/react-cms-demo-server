const fields = {
    name: { type: "text", name: "name", text: "Name", placeholder: 'Ex: john', required: true },
    email: { type: "email", name: "email", text: "Email", placeholder: 'Ex: john@example.com', required: true },
    password: { type: "password", name: "password", text: "Password", placeholder: '********', required: true },
    retypePassword: { type: "password", name: "retypePassword", text: "Confirm password", placeholder: '********', required: true },
    mobile: { type: "tel", name: "mobile", text: "Mobile", placeholder: '35X-xxx-xx23', required: true },
    
    role: { type: "text", name: "role", text: "Designation", placeholder: 'Software Engineer', required: true },
    companyName: { type: "text", name: "company", text: "Company Name", placeholder: 'Ex: Example Pvt Ltd.', required: true },
    companyWebsite: { type: "url", name: "companyURL", text: "Company Website", placeholder: 'Ex: https://www.example.com', required: true },
    address: { type: "text", name: "address", text: "Address", placeholder: 'Example street, bangalore', required:false },

    tagName: { type: "text", name: "tag", text: "Tag", placeholder: '', required: true },
    taskName: { type: "text", name: "task", text: "Task Description", placeholder: '', required: true },
    agenda: { type: "text", name: "agenda", text: "Agenda", placeholder: '', required: true },
    dealValue: { type: "number", name: "dealValue", text: "Deal Value", placeholder: 'Ammount (in INR) ', required: true },
    deadLine: { type: "date", name: "dealDeadline", text: "DeadLine", placeholder:"DeadLine", required: true}
}

export const register = [
    fields.name,
    fields.companyName,
    fields.companyWebsite,
    fields.mobile,
    fields.email,
    fields.password,
    fields.retypePassword
];

export const login = [
    fields.email,
    fields.password
];

export const clientInfo = [
    fields.name,
    fields.mobile,
    fields.role,
    fields.email,
    fields.companyName,
    fields.companyWebsite,
    fields.address
];

export const deal = [
    fields.dealValue,
    fields.tagName,
    fields.deadLine
]

export const task = [
    fields.taskName,
    fields.tagName,
    fields.deadLine
]

export const appointment = [
    fields.agenda,
    fields.tagName,
    fields.deadLine
]

export default { register };