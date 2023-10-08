import { IBuilding, IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const BUILDING_URL = "/buildings";

export const buildingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all building
    buildings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BUILDING_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IBuilding[], meta: IMeta) => {
        return {
          buildings: response,
          meta,
        };
      },
      //@ts-ignore
      providesTags: [tagTypes.building],
    }),
    // get single building
    building: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "GET",
      }),
      //@ts-ignore
      providesTags: [tagTypes.building],
    }),
    // create a new building
    addBuilding: build.mutation({
      query: (data) => ({
        url: BUILDING_URL,
        method: "POST",
        data,
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.building],
    }),
    // update existing building
    updateBuilding: build.mutation({
      query: (data) => ({
        url: `${BUILDING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.building],
    }),
    // delete existing building
    deleteBuilding: build.mutation({
      query: (id) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "DELETE",
      }),
      //@ts-ignore
      invalidatesTags: [tagTypes.building],
    }),
  }),
});

export const {
  useAddBuildingMutation,
  useBuildingsQuery,
  useBuildingQuery,
  useUpdateBuildingMutation,
  useDeleteBuildingMutation,
} = buildingApi;
