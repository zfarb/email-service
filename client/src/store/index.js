import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersApi } from './apis/usersApi';
import { reducer as ReduxForm } from 'redux-form';

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        form: ReduxForm
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(usersApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    useGetUserQuery,
    useAddCreditsMutation,
    useAddSurveyMutation,
    useGetSurveysQuery
} from './apis/usersApi';
export { store };
