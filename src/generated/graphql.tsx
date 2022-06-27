import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateDonationInput = {
  count: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  team?: InputMaybe<Scalars['String']>;
};

export type Donation = {
  __typename?: 'Donation';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  team?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDonation: Donation;
};


export type MutationCreateDonationArgs = {
  createDonationInput: CreateDonationInput;
};

export type OrderByParams = {
  direction?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  donation?: Maybe<Donation>;
  donations: Array<Maybe<Donation>>;
  totalDonations: Scalars['Int'];
};


export type QueryDonationArgs = {
  id: Scalars['String'];
};


export type QueryDonationsArgs = {
  orderBy?: InputMaybe<OrderByParams>;
};

export type Result = {
  __typename?: 'Result';
  total: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  totalUpdated?: Maybe<Result>;
};

export type TotalDonationsQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalDonationsQuery = { __typename?: 'Query', totalDonations: number };

export type TotalUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TotalUpdatedSubscription = { __typename?: 'Subscription', totalUpdated?: { __typename?: 'Result', total: number } | null };

export type DonationsQueryVariables = Exact<{
  orderBy?: InputMaybe<OrderByParams>;
}>;


export type DonationsQuery = { __typename?: 'Query', donations: Array<{ __typename?: 'Donation', count: number, createdAt: any, displayName: string, id: string, message?: string | null, team?: string | null } | null> };

export type CreateDonationMutationVariables = Exact<{
  createDonationInput: CreateDonationInput;
}>;


export type CreateDonationMutation = { __typename?: 'Mutation', createDonation: { __typename?: 'Donation', count: number, createdAt: any, displayName: string, id: string, message?: string | null, team?: string | null } };


export const TotalDonationsDocument = gql`
    query TotalDonations {
  totalDonations
}
    `;

/**
 * __useTotalDonationsQuery__
 *
 * To run a query within a React component, call `useTotalDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalDonationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalDonationsQuery(baseOptions?: Apollo.QueryHookOptions<TotalDonationsQuery, TotalDonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalDonationsQuery, TotalDonationsQueryVariables>(TotalDonationsDocument, options);
      }
export function useTotalDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalDonationsQuery, TotalDonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalDonationsQuery, TotalDonationsQueryVariables>(TotalDonationsDocument, options);
        }
export type TotalDonationsQueryHookResult = ReturnType<typeof useTotalDonationsQuery>;
export type TotalDonationsLazyQueryHookResult = ReturnType<typeof useTotalDonationsLazyQuery>;
export type TotalDonationsQueryResult = Apollo.QueryResult<TotalDonationsQuery, TotalDonationsQueryVariables>;
export const TotalUpdatedDocument = gql`
    subscription TotalUpdated {
  totalUpdated {
    total
  }
}
    `;

/**
 * __useTotalUpdatedSubscription__
 *
 * To run a query within a React component, call `useTotalUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTotalUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTotalUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TotalUpdatedSubscription, TotalUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TotalUpdatedSubscription, TotalUpdatedSubscriptionVariables>(TotalUpdatedDocument, options);
      }
export type TotalUpdatedSubscriptionHookResult = ReturnType<typeof useTotalUpdatedSubscription>;
export type TotalUpdatedSubscriptionResult = Apollo.SubscriptionResult<TotalUpdatedSubscription>;
export const DonationsDocument = gql`
    query Donations($orderBy: OrderByParams) {
  donations(orderBy: $orderBy) {
    count
    createdAt
    displayName
    id
    message
    team
  }
}
    `;

/**
 * __useDonationsQuery__
 *
 * To run a query within a React component, call `useDonationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDonationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDonationsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useDonationsQuery(baseOptions?: Apollo.QueryHookOptions<DonationsQuery, DonationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DonationsQuery, DonationsQueryVariables>(DonationsDocument, options);
      }
export function useDonationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DonationsQuery, DonationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DonationsQuery, DonationsQueryVariables>(DonationsDocument, options);
        }
export type DonationsQueryHookResult = ReturnType<typeof useDonationsQuery>;
export type DonationsLazyQueryHookResult = ReturnType<typeof useDonationsLazyQuery>;
export type DonationsQueryResult = Apollo.QueryResult<DonationsQuery, DonationsQueryVariables>;
export const CreateDonationDocument = gql`
    mutation CreateDonation($createDonationInput: CreateDonationInput!) {
  createDonation(createDonationInput: $createDonationInput) {
    count
    createdAt
    displayName
    id
    message
    team
  }
}
    `;
export type CreateDonationMutationFn = Apollo.MutationFunction<CreateDonationMutation, CreateDonationMutationVariables>;

/**
 * __useCreateDonationMutation__
 *
 * To run a mutation, you first call `useCreateDonationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDonationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDonationMutation, { data, loading, error }] = useCreateDonationMutation({
 *   variables: {
 *      createDonationInput: // value for 'createDonationInput'
 *   },
 * });
 */
export function useCreateDonationMutation(baseOptions?: Apollo.MutationHookOptions<CreateDonationMutation, CreateDonationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDonationMutation, CreateDonationMutationVariables>(CreateDonationDocument, options);
      }
export type CreateDonationMutationHookResult = ReturnType<typeof useCreateDonationMutation>;
export type CreateDonationMutationResult = Apollo.MutationResult<CreateDonationMutation>;
export type CreateDonationMutationOptions = Apollo.BaseMutationOptions<CreateDonationMutation, CreateDonationMutationVariables>;