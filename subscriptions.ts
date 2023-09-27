/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePortfolio = /* GraphQL */ `
  subscription OnCreatePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
  ) {
    onCreatePortfolio(filter: $filter) {
      id
      about
      skills
      experience {
        id
        title
        company
        startDate
        endDate
        description
        createdAt
        updatedAt
        __typename
      }
      projects {
        id
        name
        description
        imageURL
        link
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePortfolio = /* GraphQL */ `
  subscription OnUpdatePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
  ) {
    onUpdatePortfolio(filter: $filter) {
      id
      about
      skills
      experience {
        id
        title
        company
        startDate
        endDate
        description
        createdAt
        updatedAt
        __typename
      }
      projects {
        id
        name
        description
        imageURL
        link
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePortfolio = /* GraphQL */ `
  subscription OnDeletePortfolio(
    $filter: ModelSubscriptionPortfolioFilterInput
  ) {
    onDeletePortfolio(filter: $filter) {
      id
      about
      skills
      experience {
        id
        title
        company
        startDate
        endDate
        description
        createdAt
        updatedAt
        __typename
      }
      projects {
        id
        name
        description
        imageURL
        link
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onCreateExperience(filter: $filter) {
      id
      title
      company
      startDate
      endDate
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onUpdateExperience(filter: $filter) {
      id
      title
      company
      startDate
      endDate
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onDeleteExperience(filter: $filter) {
      id
      title
      company
      startDate
      endDate
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      description
      imageURL
      link
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      description
      imageURL
      link
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      description
      imageURL
      link
      createdAt
      updatedAt
      __typename
    }
  }
`;
