import React, { FC } from 'react';
import { ListGroup } from 'react-bootstrap';

import { IFeed } from '../models/IFeed';

import FeedItem from './FeedItem';

interface FeedListProps {
	feeds: IFeed[];
}

const FeedList: FC<FeedListProps> = ({ feeds }) => {
	return (
		<ListGroup as="ol" numbered>
			{feeds.map(({ id, title, description, postsCount }) => (
				<FeedItem
					key={id}
					title={title}
					description={description}
					postsCount={postsCount as number}
				/>
			))}
		</ListGroup>
	);
};

export default FeedList;
