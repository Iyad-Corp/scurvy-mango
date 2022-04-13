import Session from 'supertokens-auth-react/recipe/session';

async function getUserId() {
  let userId = null;

  if (await Session.doesSessionExist()) {
    userId = await Session.getUserId();
    // let accessTokenPayload = await Session.getAccessTokenPayloadSecurely();
  }

  return userId;
}

export default getUserId;