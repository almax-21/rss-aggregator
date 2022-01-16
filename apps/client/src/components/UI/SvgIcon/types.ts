export enum SVG_ICON_VARIANTS {
	WIFI_OFF = 'WIFI_OFF',
	SORT = 'NEW_FIRST',
	SORT_REVERSE = 'OLD_FIRST',
	USER = 'USER',
	LANG = 'LANG',
	MICROPHONE_ON = 'MICROPHONE_ON',
	MICROPHONE_OFF = 'MICROPHONE_OFF',
	SIGN_OUT = 'SIGN_OUT',
	SUCCESS = 'success',
	DANGER = 'danger',
}

export type SVG_ICON_TYPE =
	typeof SVG_ICON_VARIANTS[keyof typeof SVG_ICON_VARIANTS];
