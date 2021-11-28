import { LOCALES } from './locales';
import { IMessages, MESSAGES } from './types';

export const messages: IMessages = {
	[LOCALES.ENGLISH]: {
		[MESSAGES.LANGUAGE]: 'Language',
		[MESSAGES.ENGLISH]: 'English',
		[MESSAGES.RUSSIAN]: 'Russian',
		[MESSAGES.MAIN_HEADER]: 'RSS aggregator',
		[MESSAGES.DESCRIPTION]:
			'RSS aggregator is one of the best ways to keep your finger on the pulse of events. For example, a compilation of the latest news will help you stay on top of your niche or hobby.',
		[MESSAGES.KEYWORDS]: 'rss, feed, news',
		[MESSAGES.LEAD]: "Start reading RSS today! It's easy, it's beautiful.",
		[MESSAGES.RSS_INPUT]: 'RSS link',
		[MESSAGES.LOADING]: 'Loading',
		[MESSAGES.ADD]: 'Add',
		[MESSAGES.SEARCH]: 'Search',
		[MESSAGES.SEARCH_BY_REQUEST]: 'Search by request',
		[MESSAGES.FIND]: 'Find',
		[MESSAGES.NOT_FOUND]: 'Not found',
		[MESSAGES.RESET]: 'Reset',
		[MESSAGES.DELETE]: 'Delete',
		[MESSAGES.EXAMPLE]: 'Example',
		[MESSAGES.POSTS]: 'Posts',
		[MESSAGES.PREVIEW]: 'Preview',
		[MESSAGES.READ]: 'Read',
		[MESSAGES.READ_MORE]: 'Read more',
		[MESSAGES.UNREAD]: 'Unread',
		[MESSAGES.ALL]: 'All',
		[MESSAGES.CLOSE]: 'Close',
		[MESSAGES.FEEDS]: 'Feeds',
		[MESSAGES.NO_FEEDS]: 'No feeds yet',
		[MESSAGES.FEEDS_TOOLTIP]: 'Show posts from a specific feed',
		[MESSAGES.FEEDS_DELETE_WARNING]: 'Are you sure you want to delete feed?',
		[MESSAGES.SUCCESSFULLY_LOADED]: 'RSS successfully loaded!',
		[MESSAGES.INSPIRED_BY]: 'Inspired by',
		[MESSAGES.HEXLET_COMPANY]: 'Hexlet',
		[MESSAGES.ERROR_EMPTY]: 'The field must not be empty',
		[MESSAGES.ERROR_INVALID_URL]: 'The link must be a valid URL',
		[MESSAGES.ERROR_ALREADY_EXIST]: 'RSS already exists',
		[MESSAGES.ERROR_NETWORK]: 'Network error. Check your internet connection',
		[MESSAGES.ERROR_TIMEOUT]: 'The response timed out.',
		[MESSAGES.ERROR_INCORRECT_RSS]: "Resource doesn't contain valid RSS",
		[MESSAGES.ERROR_UNKNOWN]: 'Something went wrong. Please try again later.',
	},
	[LOCALES.RUSSIAN]: {
		[MESSAGES.LANGUAGE]: 'Язык',
		[MESSAGES.ENGLISH]: 'Английский',
		[MESSAGES.RUSSIAN]: 'Русский',
		[MESSAGES.MAIN_HEADER]: 'RSS агрегатор',
		[MESSAGES.DESCRIPTION]:
			'RSS агрегатор - одна из лучших возможностей держать руку на пульсе событий. Например, подборка последних новостей поможет быть в курсе дел вашей ниши или хобби.',
		[MESSAGES.KEYWORDS]: 'rss, лента, новости',
		[MESSAGES.LEAD]: 'Начните читать RSS сегодня! Это легко, это красиво.',
		[MESSAGES.RSS_INPUT]: 'Ссылка RSS',
		[MESSAGES.LOADING]: 'Загрузка',
		[MESSAGES.ADD]: 'Добавить',
		[MESSAGES.SEARCH]: 'Поиск',
		[MESSAGES.SEARCH_BY_REQUEST]: 'Поиск по запросу',
		[MESSAGES.FIND]: 'Найти',
		[MESSAGES.NOT_FOUND]: 'Не найдено',
		[MESSAGES.RESET]: 'Сброс',
		[MESSAGES.DELETE]: 'Удалить',
		[MESSAGES.EXAMPLE]: 'Пример',
		[MESSAGES.POSTS]: 'Посты',
		[MESSAGES.PREVIEW]: 'Просмотр',
		[MESSAGES.READ]: 'Прочитанные',
		[MESSAGES.READ_MORE]: 'Читать полностью',
		[MESSAGES.UNREAD]: 'Непрочитанные',
		[MESSAGES.ALL]: 'Все',
		[MESSAGES.CLOSE]: 'Закрыть',
		[MESSAGES.FEEDS]: 'Фиды',
		[MESSAGES.NO_FEEDS]: 'Фидов пока нет',
		[MESSAGES.FEEDS_TOOLTIP]: 'Показать посты конкретного фида',
		[MESSAGES.FEEDS_DELETE_WARNING]: 'Вы уверены, что хотите удалить фид?',
		[MESSAGES.SUCCESSFULLY_LOADED]: 'RSS успешно загружен!',
		[MESSAGES.INSPIRED_BY]: 'Вдохновлено',
		[MESSAGES.HEXLET_COMPANY]: 'Хекслет',
		[MESSAGES.ERROR_EMPTY]: 'Поле не должно быть пустым',
		[MESSAGES.ERROR_INVALID_URL]: 'Ссылка должна быть валидным URL',
		[MESSAGES.ERROR_ALREADY_EXIST]: 'RSS уже существует',
		[MESSAGES.ERROR_NETWORK]: 'Ошибка сети. Проверьте подключение к интернету',
		[MESSAGES.ERROR_TIMEOUT]: 'Время ожидания ответа истекло.',
		[MESSAGES.ERROR_INCORRECT_RSS]: 'Ресурс не содержит валидный RSS',
		[MESSAGES.ERROR_UNKNOWN]:
			'Что-то пошло не так. Пожалуйста, повторите попытку позже.',
	},
};
