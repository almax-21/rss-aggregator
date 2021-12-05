import React, { FC } from 'react';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl';

import useTypedDispatch from '../hooks/redux/useTypedDispatch';
import { LOCALES } from '../i18n/locales';
import { LocaleType, MESSAGES } from '../i18n/types';
import { setLocale } from '../store/slices/localeSlice';

interface LocaleSwitcherProps {
	classes: string;
}

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ classes }) => {
	const dispatch = useTypedDispatch();

	const intl = useIntl();

	const localeHandler = (value: string | null) => {
		if (value) {
			dispatch(setLocale(value as LocaleType));
		}
	};

	return (
		<DropdownButton
			as={ButtonGroup}
			className={classes}
			size="sm"
			title={intl.formatMessage({ id: MESSAGES.LANGUAGE })}
			onSelect={localeHandler}
		>
			<Dropdown.Item eventKey={LOCALES.RUSSIAN}>
				<FormattedMessage id={MESSAGES.RUSSIAN} />
			</Dropdown.Item>
			<Dropdown.Item eventKey={LOCALES.ENGLISH}>
				<FormattedMessage id={MESSAGES.ENGLISH} />
			</Dropdown.Item>
		</DropdownButton>
	);
};

export default LocaleSwitcher;
