import type { BaseTranslation } from '../i18n-types';

const en = {
	MAIN: {
		TITLE: 'TAX CREDIT CALCULATOR',
		DESCRIPTION:
			'Families with children in Colorado now have access to more tax credits than ever before! In 2025, families may receive between 2k and 10k per child in credits when filing their taxes. In less than 60 seconds, you can find out how much you could benefit by answering these simple questions.'
	},
	FORM: {
		TITLE: 'Tell Us About Your Household',
		QUESTIONS: {
			MARRIED: {
				QUESTION: 'Do you file taxes as single or jointly with a spouse?',
				MARRIED: 'With a Spouse',
				SINGLE: 'Single'
			},
			CHILDREN: {
				ZERO_TO_4: {
					QUESTION: 'How many children under age 6 did you have at the end of 2025?',
					LABEL: 'Number of children'
				},
				FIVE_TO_16: {
					QUESTION:
						'How many children between the ages of 6 and 16 did you have at the end of 2025?',
					LABEL: 'Number of children'
				},
				ERROR: 'The max household size is 8'
			},
			INCOME: {
				QUESTION_WITH_SPOUSE: 'Do you or your spouse have an income?',
				QUESTION: 'Do you have an income?',
				FREQUENCY: {
					QUESTION: 'How often are you paid this income?',
					LABEL: 'Frequency',
					HELP_TEXT:
						'"Every 2 weeks" means you get paid every other week. "Twice a month" means you get paid two times a month on the same dates each month.',
					OPTIONS: {
						WEEKLY: 'Weekly',
						BIWEEKLY: '2 Weeks',
						SEMIMONTHLY: 'Twice a Month',
						MONTHLY: 'Monthly',
						HOURLY: 'Hourly'
					}
				},
				AMOUNT: {
					QUESTION: 'How much do you receive before taxes each pay period for this income?',
					LABEL: 'Amount'
				},
				HOURS: {
					QUESTION: 'What is your hourly rate?',
					LABEL: 'Hours'
				},
				ERROR: 'This field is required',
				REMOVE_INCOME: 'Remove Income',
				ADD_INCOME: 'ADD ANOTHER INCOME'
			},
			CARE_WORKER: {
				QUESTION: 'Do you regularly care for kids under 6 years old other than your own?',
				SPOUSE_QUESTION:
					'Does your spouse regularly care for kids under 6 years old other than your own?',
				HELP_TEXT:
					'Care workers include **family, friends and neighbors** who regularly care for kids under 6 years old (about 14 hours per week) in addition to licensed childcare providers, home health aides, personal care aides, and nursing assistants.'
			}
		},
		YES_OR_NO_INPUT: {
			YES: 'Yes',
			NO: 'No'
		},
		SUBMIT: 'CALCULATE MY TAX CREDITS',
		LOADING: 'LOADING',
		ERROR: 'Something went wrong'
	},
	RESULTS: {
		TITLE_START: 'FILE 2025 TAXES & RECEIVE',
		TITLE_MIDDLE: '{0:string}',
		TITLE_END: '{0:string=""} IN TAX CREDITS',
		CREDITS_FOUND_TITLE: '{0:number} Tax Credits Found:',
		CREDIT_NAMES: {
			co_tax_credit_eitc: 'Federal Earned Income Tax Credit:',
			co_tax_credit_coeitc: 'Colorado Earned Income Tax Credit:',
			co_tax_credit_ctc: 'Federal Child Tax Credit:',
			co_tax_credit_coctc: 'Colorado Child Tax Credit:',
			co_tax_credit_fatc: 'Colorado Family Affordability Tax Credit:',
			co_tax_credit_care_worker: 'Colorado Care Worker Tax Credit:'
		},
		REQUIRED_DOCUMENTS: {
			TITLE: 'Required Documents to File Taxes:',
			ID: 'Photo ID (driver’s license, state ID, or passport).',
			SSN: 'Social Security (SSN) card or Individual Taxpayer Identification Number (ITIN) letter for yourself and each person listed on the tax return.',
			BIRTH_DATES:
				"Birth dates for everyone on the tax return. You may need your children's birth certificates if you are claiming the Child Tax Credit (CTC).",
			W2: 'W2s, 1099s, and other tax-related documents.',
			BANK_ACCOUNT:
				'A checking/savings account and routing number to receive your refund by direct deposit, or your mailing address to have a check mailed to you.',
			PRIOR_TAX_RETURNS: 'Prior year tax returns, if you have them.',
			IP_PIN: 'Identity Protection PIN (IP PIN), if you have one. Learn more about an IP PIN',
			IP_PIN_LINK_TEXT: 'here'
		},
		FILE_FOR_FREE: {
			TITLE: 'FILE FOR FREE',
			ONLINE: 'FILE ONLINE',
			IN_PERSON: 'FILE IN-PERSON'
		},
		OTHER_FILING_OPTIONS: {
			TITLE: 'OTHER FILING OPTIONS',
			PAID: 'PAID FILING OPTIONS',
			FREE_TAX_USA: 'FILE ONLINE WITH SUPPORT FOR $25'
		},
		DISCLAIMER:
			'Based on the income information you provided, this is the total amount of credits you may be eligible for. The final refund you receive will be based on this number minus any liabilities you may owe. Filers who receive all or most of their income from a W-2 earning job will likely receive nearly all of the value of these credits in a refund.',
		MFB: {
			TITLE: 'OTHER BENEFITS',
			DESCRIPTION:
				'To see what other benefits you may be eligible for, click the button below to visit MyFriendBen.',
			BUTTON: 'MEET MYFRIENDBEN'
		},
		SAVINGS_COLLABORATIVE: {
			DESCRIPTION:
				'Make the most of your tax return with free banking, savings and financial planning services.',
			BUTTON: 'VISIT SAVINGS COLLABORATIVE'
		}
	},
	FILE_IN_PERSON_QUIZ: {
		INTRO:
			'Free, in-person tax help will be limited in 2026. The good news is that you may be able to file your taxes online for free, with step-by-step help, and get your refund faster. Answer a few simple questions below to see if online filing is a good option for you.',
		QUESTIONS: {
			COMPUTER_COMFORT: {
				QUESTION:
					'On a scale of 1-5, how comfortable do you feel using a computer? (with 1 being the least comfortable and 5 being the most comfortable)',
				SCALE: {
					1: '1 - Not comfortable',
					2: '2',
					3: '3',
					4: '4',
					5: '5 - Very comfortable'
				}
			},
			TAX_COMFORT: {
				QUESTION:
					'On a scale of 1-5, how comfortable do you feel about filing your own taxes? (with 1 being the least comfortable and 5 being the most comfortable)',
				SCALE: {
					1: '1 - Not comfortable',
					2: '2',
					3: '3',
					4: '4',
					5: '5 - Very comfortable'
				}
			},
			LIFE_EVENTS: {
				QUESTION:
					'Have you experienced one of these four life changing events in the past year? (Select all that apply)',
				OPTIONS: {
					BIRTH_ADOPTION: 'Birth or adoption of a child',
					MARRIED: 'Married',
					DIVORCED: 'Divorced or separated',
					SPOUSE_DEATH: 'Death of a spouse'
				}
			},
			CHILD_CARE: {
				QUESTION: 'Do you regularly care for children other than your own who are age 6 or younger?'
			},
			W9_1099: {
				QUESTION: 'Did you fill out a W9 to receive payment and/or did you receive a 1099?'
			},
			SSN_ITIN: {
				QUESTION:
					'Do you have a social security number or are you filing with an Individual Taxpayer Identification Number (ITIN)?',
				OPTIONS: {
					SSN: 'Social Security Number (SSN)',
					ITIN: 'Individual Taxpayer Identification Number (ITIN)'
				}
			},
			FILING_YEAR: {
				QUESTION:
					'Are you filing only for the 2025 tax year or are you filing for a different year or multiple years?',
				OPTIONS: {
					ONLY_2025: '2025 tax year only',
					MULTIPLE: 'Different year or multiple years'
				}
			},
			LANGUAGE_ASSISTANCE: {
				QUESTION: 'Do you need assistance in a language other than English or Spanish?'
			}
		},
		OUTCOMES: {
			IN_PERSON_GOOD_FIT: {
				COPY: 'In-person tax help is likely best for you. Click below to find a free tax help site and book an appointment early, if you can.',
				BUTTON: 'FILE FOR FREE IN-PERSON'
			},
			IN_PERSON_STILL_SUITED: {
				COPY: 'In-person tax help is likely best for you. Click below to find a free tax help site and book an appointment early, if you can.',
				BUTTON: 'FILE FOR FREE IN-PERSON'
			},
			ONLINE_WITH_SUPPORT: {
				COPY: 'Good news! Online tax filing may be a great fit for you. File online for free with help from a trained volunteer with the VITA program, so you can file with peace of mind and get your refund faster.',
				PRIMARY_BUTTON: 'FILE FOR FREE ONLINE WITH SUPPORT',
				IN_PERSON_LINK:
					'Still want to see if there is capacity to help support you with free, in-person filing support? Click here'
			},
			OPTIMIZED_DIY: {
				COPY: 'Good news! Online tax filing may be a great fit for you. File online for free with this optimized, do-it-yourself service and get access to your refund faster — often within 45 minutes after you file. Explore that DIY service below as well as two more supportive options.',
				BUTTONS: {
					DIY: 'OPTIMIZED & FREE DIY ONLINE FILING',
					SUPPORT_25: 'FILE ONLINE WITH SUPPORT FOR $25',
					PAID: 'OTHER PAID FILING OPTIONS WITH SUPPORT'
				},
				IN_PERSON_LINK:
					'Still want to see if there is capacity to help support you with free, in-person filing support? Click here'
			},
			ONLINE_AND_OTHER: {
				COPY: 'Good news! Online tax filing may be a great fit for you. Explore these options to file online, make taxes easier, and get your refund faster.',
				BUTTONS: {
					FREE_ONLINE: 'FILE FOR FREE ONLINE',
					SUPPORT_25: 'FILE ONLINE WITH SUPPORT FOR $25',
					PAID: 'OTHER PAID FILING OPTIONS WITH SUPPORT'
				},
				IN_PERSON_LINK:
					'Still want to see if there is capacity to help support you with free, in-person filing support? Click here'
			}
		},
		SUBMIT_BUTTON: 'SEE MY OPTIONS',
		NEXT_BUTTON: 'NEXT',
		BACK_BUTTON: 'BACK',
		CLOSE_BUTTON: 'CLOSE'
	}
} satisfies BaseTranslation;

export default en;
