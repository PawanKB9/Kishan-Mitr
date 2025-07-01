import { AppApi } from "./AppApi.jsx";

export const UserApi = AppApi.injectEndpoints({
  reducerPath: 'AppApi',
  endpoints: (builder) => ({
    // Create a new user
    signUp: builder.mutation({
      query: ({ name,  password ,location ,phone, token }) => ({
        url: `/user/signUp`,
        method: 'POST',
        body: { name,  password ,location ,phone, token },
      }),
      
    }),

    // Log in
    logIn: builder.mutation({
      query: ({ phone, password }) => ({
        url: `/user/login`,
        method: 'POST',
        body: { phone, password },
        credentials: "include",
      }),
      
    }),

    // Log out
    logOut: builder.mutation({
      query: () => ({
        url: `/user/logout`,
        method: 'POST',
        credentials: 'include',
      }),
    }),

    // Get current user data
    getCurrentUser: builder.query({
      query: () => ({
        url: `/user/profile`,
        method:'GET',
        credentials: 'include',
      }),
      providesTags:["user"],
    }),

    // Update name & description
    updateProfile: builder.mutation({
      query: ({name, location , shopName}) => ({
        url: `/user/update-profile`,
        method: 'PATCH',
        body: { name, location , shopName },
        credentials: 'include',
      }),
    }),
    
    // change Password
    changePassword: builder.mutation({
      query: ( { oldPassword ,newPassword} ) => ({
        url: `/user/changepassword`,
        method: 'PATCH',
        body: { oldPassword ,newPassword},
        credentials: 'include',
      }),
    }),
    
    // Reset password
    forgotPassword: builder.mutation({
      query: ({ phone, password, token }) => ({
        url: `/user/forgotpassword`,
        method: 'POST',
        body: { phone, password, token },
        credentials: "include",
      })

    }),
    
    //update Contact number
    updateContact: builder.mutation({
        query: ({ oldContact, newContact , token}) => ({
            url: `/user/update-contact`,
            method: "PATCH",
            body: { oldContact, newContact , token },
            credentials: 'include',
        }),
    }),

    //update profile pic remained
    
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useLogOutMutation,
  useLazyGetCurrentUserQuery,
  useUpdateProfileMutation, 
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useUpdateContactMutation,
} = UserApi;
