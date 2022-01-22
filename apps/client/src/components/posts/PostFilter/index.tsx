import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';

import useTypedDispatch from '../../../hooks/redux/useTypedDispatch';
import useTypedSelector from '../../../hooks/redux/useTypedSelector';
import { MESSAGES } from '../../../i18n/types';
import setAllActivePostsRead from '../../../store/async-actions/setAllActivePostsRead';
import {
	selectActiveFeedId,
	selectPostFilter,
	selectUnreadPostsCount,
} from '../../../store/selectors/contentSelectors';
import {
	switchFilterState,
	switchSortType,
} from '../../../store/slices/postsSlice';
import { POST_STATE_TYPE, POST_STATES } from '../../../store/types';
import { SORT_TYPE } from '../../../types';
import MyDropDown from '../../UI/MyDropDown';
import MyModal from '../../UI/MyModal/index';
import { MODAL_TYPES } from '../../UI/MyModal/types';

import FilterSearch from './FilterSearch';
import FilterSort from './FilterSort';

import './style.scss';

interface PostFilterProps {
	resetActivePage: () => void;
}

const PostFilter: FC<PostFilterProps> = ({ resetActivePage }) => {
	const [isShowModal, setIsShowModal] = useState<boolean>(false);

	const filterValues = Object.values(POST_STATES);

	const { state: filterState, sortType } = useTypedSelector(selectPostFilter);
	const activeFeedId = useTypedSelector(selectActiveFeedId);
	const unreadPostsCount = useTypedSelector(selectUnreadPostsCount);

	const dispatch = useTypedDispatch();
	const intl = useIntl();

	const handleSwitchSortType = (newType: SORT_TYPE) => () => {
		if (newType === sortType) {
			return;
		}

		dispatch(switchSortType(newType));
	};

	const handleSwitchFilterState = (value: POST_STATE_TYPE) => () => {
		if (value === filterState) {
			return;
		}

		dispatch(switchFilterState(value));

		resetActivePage();
	};

	const handleOpenModal = () => {
		setIsShowModal(true);
	};

	const handleCloseModal = () => {
		setIsShowModal(false);
	};

	const handleMarkAllRead = (activeFeedId: string) => () => {
		dispatch(setAllActivePostsRead(activeFeedId));

		setIsShowModal(false);
	};

	return (
		<>
			<div className="filter">
				<FilterSearch resetActivePage={resetActivePage} />

				<div className="d-flex flex-wrap justify-content-between flex-grow-1">
					<MyDropDown
						activeValue={filterState}
						handleSetActiveValue={handleSwitchFilterState}
						title={intl.formatMessage({ id: filterState })}
						values={filterValues}
						variant="outline-secondary"
					/>
					<FilterSort
						activeSortType={sortType}
						classes="filter__sort"
						sortHandler={handleSwitchSortType}
					/>
					<Button
						className="filter__btn filter__btn--mark-all"
						disabled={unreadPostsCount === 0}
						variant="outline-danger"
						onClick={handleOpenModal}
					>
						<FormattedMessage id={MESSAGES.MARK_ALL_AS_READ} />
					</Button>
				</div>
			</div>

			<MyModal
				description={intl.formatMessage({ id: MESSAGES.MARK_ALL_READ_WARNING })}
				handleAction={handleMarkAllRead(activeFeedId)}
				handleClose={handleCloseModal}
				isShow={isShowModal}
				title={intl.formatMessage({ id: MESSAGES.POSTS })}
				type={MODAL_TYPES.MARK}
			/>
		</>
	);
};

export default PostFilter;
