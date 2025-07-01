import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Need of updating address also controler/router/endpoint// feature
export const AppApi = createApi({
  reducerPath: "AppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/${import.meta.env.VITE_BASE_URL}`,
  //   credentials: "include",
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if (token) headers.set('Authorization', `Bearer ${token}`);
  //     return headers;
  //   },
  }),
  endpoints: (builder) => ({

    // 1. create new group
    createGroup: builder.mutation({
      query: ({ groupName,groupDes,groupPic,groupType,permission, members }) => ({
        url: '/group/create',
        method: 'POST',
        body: { groupName,groupDes,groupPic,groupType,permission, members },
      }),
      providesTags:["user"],
    }),

    // 2. Update Group name,desc. ,pic,type(false->public , true -> private)
    settingGroupProfile: builder.mutation({
      query: ({ groupId, groupName, groupDes, groupPic, groupType }) => ({
        url: '/group/setting-profile',
        method: 'PATCH',
        body: { groupId, groupName, groupDes, groupPic, groupType },
        credentials: 'include',
      }),
      providesTags:["group"],
    }),

    // 3. pending....
    updateGroupTypeAndPermission: builder.mutation({
      query: ({ accountPrivate }) => ({
        url: '/user/privacy-setting',
        method: 'PATCH',
        body: { accountPrivate },
        credentials: 'include',
      }),
    }),

    // 4. exit Group by own
    exitGroup: builder.mutation({
      query: ({ groupId, isAdmin }) => ({
        url: '/group/exit',
        method: 'POST',
        body: { groupId, isAdmin },
        credentials: 'include',
      }),
      invalidatesTags:["group"],
    }),

    
    // 5. remove User From Group only by admin
    removeUserFromGroup: builder.mutation({
      query: ({ groupId, targetUserId }) => ({
        url: '/group/remove-user',
        method: 'PATCH',
        body: { groupId, targetUserId },
        credentials: 'include'
      }),
    }),

    //6. add Member ToGroup only by admin
    addMemberToGroup: builder.mutation({
      query: ({ groupId, newMemberId }) => ({
        url: '/group/add-member',
        method: 'PATCH',
        body: { groupId, newMemberId },
        credentials: 'include',
      }),
    }),

    // 7. make User Admin only by admin
    makeUserAdmin: builder.mutation({
      query: ({ groupId, targetUserId }) => ({
        url: '/group/make-admin',
        method: 'PATCH',
        body: { groupId, targetUserId },
        credentials: 'include',
      }),
    }),

    // 8. generate Invite Link to join group
    generateInviteLink: builder.mutation({
      query: ({ phone, newPassword }) => ({
        url: '/group/invite-link',
        method: 'POST',
        body: { phone, newPassword },
      }),
    }),

  }),
});

// buttos -> logout,  ,get blocked , ,block/Unblock

export const {
  useGenerateInviteLinkMutation,
} = AppApi;