import { takeLatest } from 'redux-saga/effects'
import API from '@mobile/Services/Api'
import FixtureAPI from '@mobile/Services/FixtureApi'
import DebugConfig from '@mobile/Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '@mobile/Redux/StartupRedux'
import { GithubTypes } from '@mobile/Redux/GithubRedux'

/* ------------- Sagas ------------- */

import { startup } from '@mobile/Sagas/StartupSagas'
import { getUserAvatar } from '@mobile/Sagas/GithubSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ]
}
