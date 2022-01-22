import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Feed } from '../../models/Feed';
import deleteFeed from '../async-actions/deleteFeed';
import getDataFromApi from '../async-actions/getAllContentFromApi';
import getContentFromRssSource from '../async-actions/getContentFromRssSource';
import { ApiContentData, ApiFeedData, FeedsState } from '../types';

import { logoutUser } from './userSlice';

const initialState: FeedsState = {
	entities: {},
	ids: [],
	activeFeedId: '',
};

const feedsSlice = createSlice({
	name: 'feeds',
	initialState,
	reducers: {
		updateActiveFeed: (state, action: PayloadAction<string>) => {
			state.activeFeedId = action.payload;
		},
	},
	extraReducers: {
		[getDataFromApi.fulfilled.type]: (
			state,
			action: PayloadAction<ApiContentData>
		) => {
			const { feeds } = action.payload;

			feeds.forEach((feed: Feed) => {
				state.entities[feed._id] = feed;
				state.ids = [feed._id, ...state.ids];
				state.activeFeedId = feed._id;
			});
		},
		[getContentFromRssSource.fulfilled.type]: (
			state,
			action: PayloadAction<ApiFeedData>
		) => {
			const { feed } = action.payload;

			state.entities[feed._id] = feed;
			state.ids = [feed._id, ...state.ids];
			state.activeFeedId = feed._id;
		},
		[deleteFeed.fulfilled.type]: (state, action: PayloadAction<string>) => {
			const newFeedIDs = state.ids.filter((id) => id !== action.payload);

			if (state.activeFeedId === action.payload) {
				state.activeFeedId = newFeedIDs[0] ?? '';
			}

			delete state.entities[action.payload];
			state.ids = newFeedIDs;
		},
		[logoutUser.type]: (state) => {
			state.entities = {};
			state.ids = [];
			state.activeFeedId = '';
		},
	},
});

export const { updateActiveFeed } = feedsSlice.actions;

export default feedsSlice.reducer;
