export const createIssueDto = (tittle, description, deadLine, issueAssignedUserIdentifier, issueAuthorIdentifier, ) => {
    return {
        tittle,
        description,
        issueAuthorIdentifier,
        issueAssignedUserIdentifier,
        deadLine
    }
};

export const createUsersDto = (displayName, role, login, password, adminKey, email) => {
  return {
      displayName,
      role,
      login,
      password,
      adminKey,
      email,
  }
};
