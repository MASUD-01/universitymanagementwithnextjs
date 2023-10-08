import { IMeta, IOfferedCourse } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BASE_OFFERED_COURSES = "/offered-courses";

export const offeredCourseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    offeredCourses: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BASE_OFFERED_COURSES,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IOfferedCourse[], meta: IMeta) => {
        return {
          offeredCourses: response,
          meta,
        };
      },
      //@ts-ignore
      providesTags: [tagTypes.offeredCourse],
    }),
    offeredCourse: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BASE_OFFERED_COURSES}/${id}`,
        method: "GET",
      }),
      //@ts-ignore
      providesTags: [tagTypes.offeredCourse],
    }),
    addOfferedCourse: build.mutation({
      query: (data) => ({
        url: BASE_OFFERED_COURSES,
        method: "POST",
        data,
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.offeredCourse],
    }),
    updateOfferedCourse: build.mutation({
      query: (data) => ({
        url: `${BASE_OFFERED_COURSES}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.offeredCourse],
    }),
    deleteOfferedCourse: build.mutation({
      query: (id) => ({
        url: `${BASE_OFFERED_COURSES}/${id}`,
        method: "DELETE",
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.offeredCourse],
    }),
  }),
});

export const {
  useOfferedCoursesQuery,
  useAddOfferedCourseMutation,
  useDeleteOfferedCourseMutation,
  useUpdateOfferedCourseMutation,
} = offeredCourseApi;
