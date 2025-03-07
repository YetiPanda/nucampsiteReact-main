import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
  campsitesArray: CAMPSITES,
};

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};
