
export const USER = "USER";
export const USER_ROLE = "USER_ROLE";
export const USER_NAME = "USER_NAME";
export const USER_ID = "USER_ID";
export const LOGOUT = "LOGOUT";
export const GET_USERS = "GET_USERS";
export const GET_USERS_MANAGER = "GET_USERS_MANAGER";
export const GET_MY_CLIENTS = "GET_MY_CLIENTS";
export const GET_PACKAGE_MARKETING = "GET_PACKAGE_MARKETING";
export const GET_TRANSACTION_COORDINATOR = "GET_TRANSACTION_COORDINATOR";
export const GET_SELLS = "GET_SELLS";
export const GET_REALTORS = "GET_REALTORS";
export const GET_COMMISSION = "GET_COMMISSION";
export const GET_REFERRED = "GET_REFERRED";
export const COMMISSION_VALUE = "COMMISSION_VALUE";



export function logout() {
  return {
    type: LOGOUT,
  };
}
export function commValue(A) {
  return {
    type: COMMISSION_VALUE,
    payload: A
  };
}
export function getCommission(A) {
  return {
    type: GET_COMMISSION,
    payload: A
  };
}
export function user(user) {
  return {
    type: USER,
    payload: user,
  };
}
export function getReferred(user) {
  return {
    type: GET_REFERRED,
    payload: user,
  };
}


export function userRole(UserRole) {
  return {
    type: USER_ROLE,
    payload: UserRole,
  };
}
export function userName(UserName) {
  return {
    type: USER_NAME,
    payload: UserName,
  };
}

export function userId(UserId) {
  return {
    type: USER_ID,
    payload: UserId,
  };
}

  export function getRealtor(UserId) {
    return {
      type: GET_REALTORS,
      payload: UserId,
    }
  }
  export function getSells(UserId) {
    return {
      type: GET_SELLS,
      payload: UserId,
    }
  }
  export function getUsers(UserId) {
    return {
      type: GET_USERS,
      payload: UserId,
    }
  }
  export function getUsersManager(UserId) {
    return {
      type: GET_USERS_MANAGER,
      payload: UserId,
    }
  }

  export function getClients(UserId) {
    return {
      type: GET_MY_CLIENTS,
      payload: UserId,
    }
  }

  export function getPackageMarketing(UserId) {
    return {
      type: GET_PACKAGE_MARKETING,
      payload: UserId,
    }
  }

  export function getTransactionCoordinator(UserId) {
    return {
      type: GET_TRANSACTION_COORDINATOR,
      payload: UserId,
    }
  }

  


