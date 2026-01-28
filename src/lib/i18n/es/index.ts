import type { Translation } from '../i18n-types';

const es = {
	MAIN: {
		TITLE: 'CALCULADORA DE CREDITO FISCAL',
		DESCRIPTION:
			'¡Las familias con niños en Colorado ahora tienen acceso a más créditos fiscales que nunca! En 2025, las familias pueden recibir entre 2k y 10k por niño en créditos al presentar sus impuestos. En menos de 60 segundos, podrás descubrir cuánto podrías beneficiarte respondiendo estas sencillas preguntas.'
	},
	FORM: {
		TITLE: 'Cuéntenos sobre su hogar',
		QUESTIONS: {
			MARRIED: {
				QUESTION: '¿Declara impuestos como soltero o conjuntamente con su cónyuge?',
				MARRIED: 'Con un cónyuge',
				SINGLE: 'Soltero'
			},
			CHILDREN: {
				ZERO_TO_4: {
					QUESTION: '¿Cuántos hijos menores de 6 años tenías al finalizar el 2025?',
					LABEL: 'Número de niños'
				},
				FIVE_TO_16: {
					QUESTION: '¿Cuántos hijos entre 6 y 16 años tenías al finalizar el 2025?',
					LABEL: 'Número de niños'
				},
				ERROR: 'El tamaño máximo del hogar es 8'
			},
			INCOME: {
				QUESTION_WITH_SPOUSE: '¿Tiene usted o su cónyuge ingresos?',
				QUESTION: '¿Tienes ingresos?',
				FREQUENCY: {
					QUESTION: '¿Con qué frecuencia recibe estos ingresos?',
					LABEL: 'Frecuencia',
					HELP_TEXT:
						'"Cada 2 semanas" significa que le pagan cada dos semanas. "Dos veces al mes" significa que le pagan dos veces al mes en las mismas fechas cada mes.',
					OPTIONS: {
						WEEKLY: 'Semanalmente',
						BIWEEKLY: '2 semanas',
						SEMIMONTHLY: 'Dos veces al mes',
						MONTHLY: 'Mensual',
						HOURLY: 'Cada hora'
					}
				},
				AMOUNT: {
					QUESTION: '¿Cuánto recibe antes de impuestos en cada período de pago por este ingreso?',
					LABEL: 'Cantidad'
				},
				HOURS: {
					QUESTION: '¿Cuál es su tarifa por hora?',
					LABEL: 'Horas'
				},
				ERROR: 'Este campo es obligatorio',
				REMOVE_INCOME: 'Eliminar ingresos',
				ADD_INCOME: 'AÑADIR OTRO INGRESO'
			},
			CARE_WORKER: {
				QUESTION: '¿Cuida regularmente a niños menores de 6 años que no son suyos?',
				SPOUSE_QUESTION:
					'¿Su cónyuge cuida regularmente a niños menores de 6 años que no son suyos?',
				HELP_TEXT:
					'Los trabajadores de cuidado incluyen **familiares, amigos y vecinos** que cuidan regularmente a niños menores de 6 años (aproximadamente 14 horas por semana), además de proveedores profesionales de cuidado infantil, asistentes de salud en el hogar, asistentes de cuidado personal y asistentes de enfermería.'
			}
		},
		YES_OR_NO_INPUT: {
			YES: 'Sí',
			NO: 'No'
		},
		SUBMIT: 'CALCULAR MIS CRÉDITOS FISCALES',
		LOADING: 'CARGANDO',
		ERROR: 'algo salió mal'
	},
	RESULTS: {
		TITLE_START: 'PRESENTAR IMPUESTOS 2025',
		TITLE_MIDDLE: 'Y RECIBA {0:string} EN',
		TITLE_END: 'CRÉDITOS FISCALES',
		CREDITS_FOUND_TITLE: '{0:number} Créditos fiscales encontrados:',
		CREDIT_NAMES: {
			co_tax_credit_eitc: 'Crédito fiscal por ingreso del trabajo:',
			co_tax_credit_coeitc: 'Crédito fiscal por ingreso del trabajo de Colorado:',
			co_tax_credit_ctc: 'Crédito fiscal por hijos:',
			co_tax_credit_coctc: 'Crédito fiscal por hijos de Colorado:',
			co_tax_credit_fatc: 'Crédito fiscal por asequibilidad familiar de Colorado:',
			co_tax_credit_care_worker: 'Crédito fiscal para trabajadores de cuidado de Colorado:'
		},
		REQUIRED_DOCUMENTS: {
			TITLE: 'Documentos requeridos para presentar impuestos:',
			ID: 'Identificación con fotografía (licencia de conducir, identificación estatal o pasaporte).',
			SSN: 'Tarjeta de Seguro Social (SSN) o carta de Número de Identificación Individual del Contribuyente (ITIN) para usted y cada persona que figura en la declaración de impuestos.',
			BIRTH_DATES:
				'Fechas de nacimiento de todas las personas en la declaración de impuestos. Es posible que necesite los certificados de nacimiento de sus hijos si solicita el Crédito tributario por hijos (CTC).',
			W2: 'W2, 1099 y otros documentos relacionados con impuestos.',
			BANK_ACCOUNT:
				'Una cuenta corriente/de ahorros y un número de ruta para recibir su reembolso mediante depósito directo, o su dirección postal para que le envíen un cheque por correo.',
			PRIOR_TAX_RETURNS: 'Declaraciones de impuestos del año anterior, si las tiene.',
			IP_PIN:
				'PIN de protección de identidad (IP PIN), si tiene uno. Obtenga más información sobre un PIN de IP',
			IP_PIN_LINK_TEXT: 'aquí'
		},
		FILE_FOR_FREE: {
			TITLE: 'PRESENTAR GRATIS',
			ONLINE: 'PRESENTAR EN LÍNEA',
			IN_PERSON: 'PRESENTAR EN PERSONA'
		},
		OTHER_FILING_OPTIONS: {
			TITLE: 'OTRAS OPCIONES DE PRESENTACIÓN',
			PAID: 'OPCIONES DE PRESENTACIÓN PAGADAS',
			FREE_TAX_USA: 'DECLARAR EN LÍNEA CON APOYO POR $25'
		},
		DISCLAIMER:
			'Según la información de ingresos que proporcionó, esta es la cantidad total de créditos para los que puede ser elegible. El reembolso final que reciba se basará en este número menos cualquier obligación que pueda tener. Los contribuyentes que reciben todo o la mayor parte de sus ingresos de un trabajo con salario W-2 probablemente recibirán casi todo el valor de estos créditos en un reembolso.',
		MFB: {
			TITLE: 'OTROS BENEFICIOS',
			DESCRIPTION:
				'Para ver qué otros beneficios puede ser elegible, haga clic en el botón a continuación para visitar MyFriendBen.',
			BUTTON: 'CONOCE A MYFRIENDBEN'
		},
		SAVINGS_COLLABORATIVE: {
			DESCRIPTION:
				'Aproveche al máximo su reembolso de impuestos con servicios gratuitos de banca, ahorro y planificación financiera.',
			BUTTON: 'VISITAR SAVINGS COLLABORATIVE'
		}
	},
	FILE_IN_PERSON_QUIZ: {
		INTRO:
			'La ayuda gratuita para presentar impuestos en persona será limitada en 2026. La buena noticia es que puede presentar sus impuestos en línea de forma gratuita, con ayuda paso a paso, y recibir su reembolso más rápido. Responda algunas preguntas simples a continuación para ver si presentar en línea es una buena opción para usted.',
		QUESTIONS: {
			COMPUTER_COMFORT: {
				QUESTION:
					'En una escala del 1 al 5, ¿qué tan cómodo se siente usando una computadora? (siendo 1 el menos cómodo y 5 el más cómodo)',
				SCALE: {
					1: '1 - Nada cómodo',
					2: '2',
					3: '3',
					4: '4',
					5: '5 - Muy cómodo'
				}
			},
			TAX_COMFORT: {
				QUESTION:
					'En una escala del 1 al 5, ¿qué tan cómodo se siente presentando sus propios impuestos? (siendo 1 el menos cómodo y 5 el más cómodo)',
				SCALE: {
					1: '1 - Nada cómodo',
					2: '2',
					3: '3',
					4: '4',
					5: '5 - Muy cómodo'
				}
			},
			LIFE_EVENTS: {
				QUESTION:
					'¿Ha experimentado uno de estos cuatro eventos importantes en el último año? (Seleccione todos los que apliquen)',
				OPTIONS: {
					BIRTH_ADOPTION: 'Nacimiento o adopción de un hijo',
					MARRIED: 'Matrimonio',
					DIVORCED: 'Divorcio o separación',
					SPOUSE_DEATH: 'Fallecimiento de cónyuge'
				}
			},
			CHILD_CARE: {
				QUESTION: '¿Cuida regularmente a niños que no son suyos y que tienen 6 años o menos?'
			},
			W9_1099: {
				QUESTION: '¿Llenó un formulario W9 para recibir pago y/o recibió un formulario 1099?'
			},
			SSN_ITIN: {
				QUESTION:
					'¿Tiene un número de Seguro Social o presenta sus impuestos con un Número de Identificación Personal del Contribuyente (ITIN)?',
				OPTIONS: {
					SSN: 'Número de Seguro Social (SSN)',
					ITIN: 'Número de Identificación Personal del Contribuyente (ITIN)'
				}
			},
			FILING_YEAR: {
				QUESTION:
					'¿Está presentando solo para el año fiscal 2025 o está presentando para un año diferente o varios años?',
				OPTIONS: {
					ONLY_2025: 'Solo año fiscal 2025',
					MULTIPLE: 'Año diferente o varios años'
				}
			},
			LANGUAGE_ASSISTANCE: {
				QUESTION: '¿Necesita asistencia en un idioma que no sea inglés o español?'
			}
		},
		OUTCOMES: {
			IN_PERSON_GOOD_FIT: {
				COPY: 'La ayuda en persona para impuestos probablemente sea lo mejor para usted. Haga clic abajo para encontrar un sitio de ayuda tributaria gratuita y reserve una cita con anticipación, si puede.',
				BUTTON: 'PRESENTAR GRATIS EN PERSONA'
			},
			IN_PERSON_STILL_SUITED: {
				COPY: 'La ayuda en persona para impuestos probablemente sea lo mejor para usted. Haga clic abajo para encontrar un sitio de ayuda tributaria gratuita y reserve una cita con anticipación, si puede.',
				BUTTON: 'PRESENTAR GRATIS EN PERSONA'
			},
			ONLINE_WITH_SUPPORT: {
				COPY: '¡Buenas noticias! Presentar impuestos en línea puede ser una excelente opción para usted. Presente en línea gratis con la ayuda de un voluntario capacitado del programa VITA, para que pueda presentar con tranquilidad y recibir su reembolso más rápido.',
				PRIMARY_BUTTON: 'PRESENTAR GRATIS EN LÍNEA CON APOYO',
				IN_PERSON_LINK:
					'¿Aún desea ver si hay capacidad para ayudarlo con apoyo gratuito para presentar en persona? Haga clic aquí'
			},
			OPTIMIZED_DIY: {
				COPY: '¡Buenas noticias! Presentar impuestos en línea puede ser una excelente opción para usted. Presente en línea gratis con este servicio optimizado de hágalo usted mismo y obtenga acceso a su reembolso más rápido, a menudo dentro de los 45 minutos después de presentar. Explore ese servicio a continuación, así como dos opciones más con apoyo.',
				BUTTONS: {
					DIY: 'PRESENTACIÓN EN LÍNEA GRATUITA Y OPTIMIZADA',
					SUPPORT_25: 'PRESENTAR EN LÍNEA CON APOYO POR $25',
					PAID: 'OTRAS OPCIONES DE PAGO CON APOYO'
				},
				IN_PERSON_LINK:
					'¿Aún desea ver si hay capacidad para ayudarlo con apoyo gratuito para presentar en persona? Haga clic aquí'
			},
			ONLINE_AND_OTHER: {
				COPY: '¡Buenas noticias! Presentar impuestos en línea puede ser una excelente opción para usted. Explore estas opciones para presentar en línea, facilitar sus impuestos y recibir su reembolso más rápido.',
				BUTTONS: {
					FREE_ONLINE: 'PRESENTAR GRATIS EN LÍNEA',
					SUPPORT_25: 'PRESENTAR EN LÍNEA CON APOYO POR $25',
					PAID: 'OTRAS OPCIONES DE PAGO CON APOYO'
				},
				IN_PERSON_LINK:
					'¿Aún desea ver si hay capacidad para ayudarlo con apoyo gratuito para presentar en persona? Haga clic aquí'
			}
		},
		SUBMIT_BUTTON: 'VER MIS OPCIONES',
		NEXT_BUTTON: 'SIGUIENTE',
		BACK_BUTTON: 'ATRÁS',
		CLOSE_BUTTON: 'CERRAR'
	}
} satisfies Translation;

export default es;
