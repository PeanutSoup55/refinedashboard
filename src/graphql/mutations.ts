import gql from "graphql-tag";

export const CREATE_COMPANY_MUTATION = gql`
    mutation CreateCompany($input: CreateOneCompanyInput!) {
        createOneCompany(input: $input) {
            id
            name
            salesOwner {
                id
                name
                avatarUrl
            }
        }
    }
`;

export const UPDATE_COMPANY_MUTATION = gql`
    mutation UpdateCompany($input: UpdateOneCompanyInput!) {
        updateOneCompany(input: $input) {
            id
            name
            totalRevenue
            industry
            companySize
            businessType
            country
            website
            avatarUrl
            salesOwner {
                id
                name
                avatarUrl
            }
        }
    }
`;

export const CREATE_TASK_MUTATION = gql`
    mutation CreateTask($input: CreateOneTaskInput!) {
        createOneTask(input: $input) {
            id
            title
            description
            dueDate
            completed
            stage {
                id
                title
            }
            users {
                id
                name
                avatarUrl
            }
        }
    }
`;

export const UPDATE_TASK_MUTATION = gql`
    mutation UpdateTask($input: UpdateOneTaskInput!) {
        updateOneTask(input: $input) {
            id
            title
            completed
            description
            dueDate
            stage {
                id
                title
            }
            users {
                id
                name
                avatarUrl
            }
            checklist {
                title
                checked
            }
        }
    }
`;

export const DELETE_TASK_MUTATION = gql`
    mutation DeleteTask($input: DeleteOneTaskInput!) {
        deleteOneTask(input: $input) {
            id
        }
    }
`;

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateOneUserInput!) {
        createOneUser(input: $input) {
            id
            name
            email
            avatarUrl
            jobTitle
            phone
            timezone
        }
    }
`;

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($input: UpdateOneUserInput!) {
        updateOneUser(input: $input) {
            id
            name
            email
            avatarUrl
            jobTitle
            phone
            timezone
        }
    }
`;

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($input: DeleteOneUserInput!) {
        deleteOneUser(input: $input) {
            id
        }
    }
`;

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                name
                email
                avatarUrl
            }
        }
    }
`;

export const REGISTER_MUTATION = gql`
    mutation Register($email: String!, $password: String!, $name: String!) {
        register(email: $email, password: $password, name: $name) {
            token
            user {
                id
                name
                email
                avatarUrl
            }
        }
    }
`;