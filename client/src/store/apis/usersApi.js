import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    endpoints(builder) {
        return {
            getUser: builder.query({
                providesTags: (result, error, args) => {
                    return [{ type: 'AddCredits' }, { type: 'AddSurvey' }];
                },
                query: () => {
                    return {
                        url: '/current_user',
                        method: 'GET'
                    };
                }
            }),
            addCredits: builder.mutation({
                invalidatesTags: (result, error, args) => {
                    return [{ type: 'AddCredits' }];
                },
                query: (args) => {
                    const { token, amount } = args;
                    return {
                        url: '/stripe',
                        method: 'POST',
                        body: {
                            tokenId: token.id,
                            user: token.email,
                            amount
                        }
                    };
                }
            }),
            addSurvey: builder.mutation({
                query: (args) => {
                    const { values, history } = args;
                    history.push('/dashboard');
                    return {
                        url: '/surveys',
                        body: values,
                        method: 'POST'
                    };
                },
                invalidatesTags: () => {
                    return [{ type: 'AddSurvey' }];
                }
            })
        };
    }
});

export const { useGetUserQuery, useAddCreditsMutation, useAddSurveyMutation } =
    usersApi;
export { usersApi };
