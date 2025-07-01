import gql from "graphql-tag";

export const USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;

export const TASK_STAGES_SELECT_QUERY = gql`
  query TaskStagesSelect(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`;

export const COMPANIES_QUERY = gql`
  query Companies(
    $filter: CompanyFilter!
    $sorting: [CompanySort!]
    $paging: OffsetPaging!
  ) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        totalRevenue
        industry
        companySize
        businessType
        country
        website
        salesOwner {
          id
          name
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const COMPANY_QUERY = gql`
  query Company($id: ID!) {
    company(id: $id) {
      id
      name
      avatarUrl
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      salesOwner {
        id
        name
        avatarUrl
        email
        phone
        jobTitle
      }
      createdAt
      updatedAt
    }
  }
`;

export const TASKS_QUERY = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
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
        checklist {
          title
          checked
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const TASK_QUERY = gql`
  query Task($id: ID!) {
    task(id: $id) {
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
        email
      }
      checklist {
        title
        checked
      }
      createdAt
      updatedAt
    }
  }
`;

export const USERS_QUERY = gql`
  query Users(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        name
        email
        avatarUrl
        jobTitle
        phone
        timezone
        createdAt
        updatedAt
      }
    }
  }
`;

export const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      email
      avatarUrl
      jobTitle
      phone
      timezone
      createdAt
      updatedAt
    }
  }
`;

export const TASK_STAGES_QUERY = gql`
  query TaskStages(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      totalCount
      nodes {
        id
        title
        createdAt
        updatedAt
      }
    }
  }
`;

export const DASHBOARD_QUERY = gql`
  query Dashboard {
    companies(paging: { limit: 5 }) {
      totalCount
      nodes {
        id
        name
        avatarUrl
        totalRevenue
        salesOwner {
          id
          name
        }
      }
    }
    tasks(
      filter: { completed: { eq: false } }
      paging: { limit: 10 }
      sorting: [{ field: dueDate, direction: ASC }]
    ) {
      totalCount
      nodes {
        id
        title
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
      }
    }
  }
`;

export const KANBAN_QUERY = gql`
  query Kanban {
    taskStages {
      totalCount
      nodes {
        id
        title
        tasks {
          id
          title
          description
          dueDate
          completed
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
    }
  }
`;

export const ME_QUERY = gql`
  query Me {
    me {
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
