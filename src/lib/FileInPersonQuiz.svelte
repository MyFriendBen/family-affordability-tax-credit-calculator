<script lang="ts">
	import t, { locale } from '$lib/i18n/i18n-svelte';
	import {
		type QuizAnswers,
		type FilingOutcome,
		createDefaultAnswers,
		determineFilingOutcome
	} from './filingEligibility';
	import {
		getFileInPersonLink,
		getOnlineWithSupportLink,
		getDiyFilingLink,
		getFreeTaxUsaLink,
		getMyFreeTaxesLink,
		getPaidFilingOptionsLink
	} from './whiteLabelData';

	export let yearlyIncome: number;
	export let isCareWorker: boolean;
	export let whiteLabel: string;
	export let onBack: () => void;

	let currentStep: 'questions' | 'result' = 'questions';
	let answers: QuizAnswers = createDefaultAnswers();
	let outcome: FilingOutcome = 'online_and_other';

	// Set care worker status from the initial form (don't ask again)
	$: answers.caresForOtherChildren = isCareWorker;

	function handleSubmit() {
		outcome = determineFilingOutcome(answers, yearlyIncome);
		currentStep = 'result';
	}

	function handleBack() {
		if (currentStep === 'result') {
			currentStep = 'questions';
		} else {
			onBack();
		}
	}

	// Link getters
	$: fileInPersonLink = getFileInPersonLink(whiteLabel);
	$: onlineWithSupportLink = getOnlineWithSupportLink();
	$: diyFilingLink = getDiyFilingLink();
	$: freeTaxUsaLink = getFreeTaxUsaLink();
	$: myFreeTaxesLink = getMyFreeTaxesLink();
	$: paidFilingLink = getPaidFilingOptionsLink($locale);
</script>

<div class="quiz-container">
	{#if currentStep === 'questions'}
		<div class="intro">
			<p>{$t.FILE_IN_PERSON_QUIZ.INTRO()}</p>
		</div>

		<form on:submit|preventDefault={handleSubmit}>
			<!-- Question 1: Computer Comfort -->
			<div class="question-container">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.QUESTION()}</p>
				<div class="radio-group">
					<label class="radio-option">
						<input
							type="radio"
							name="computerComfort"
							bind:group={answers.computerComfort}
							value={1}
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['1']()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="computerComfort"
							bind:group={answers.computerComfort}
							value={2}
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['2']()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="computerComfort"
							bind:group={answers.computerComfort}
							value={3}
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['3']()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="computerComfort"
							bind:group={answers.computerComfort}
							value={4}
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['4']()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="computerComfort"
							bind:group={answers.computerComfort}
							value={5}
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['5']()}</span>
					</label>
				</div>
			</div>

			<!-- Question 2: Tax Filing Comfort -->
			<div class="question-container colored-section">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.QUESTION()}</p>
				<div class="radio-group">
					<label class="radio-option">
						<input type="radio" name="taxComfort" bind:group={answers.taxComfort} value={1} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.SCALE['1']()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="taxComfort" bind:group={answers.taxComfort} value={2} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.SCALE['2']()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="taxComfort" bind:group={answers.taxComfort} value={3} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.SCALE['3']()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="taxComfort" bind:group={answers.taxComfort} value={4} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.SCALE['4']()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="taxComfort" bind:group={answers.taxComfort} value={5} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.TAX_COMFORT.SCALE['5']()}</span>
					</label>
				</div>
			</div>

			<!-- Question 3: Life Events -->
			<div class="question-container">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LIFE_EVENTS.QUESTION()}</p>
				<div class="checkbox-group">
					<label class="checkbox-option">
						<input type="checkbox" bind:checked={answers.lifeEvents.birthOrAdoption} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LIFE_EVENTS.OPTIONS.BIRTH_ADOPTION()}</span>
					</label>
					<label class="checkbox-option">
						<input type="checkbox" bind:checked={answers.lifeEvents.married} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LIFE_EVENTS.OPTIONS.MARRIED()}</span>
					</label>
					<label class="checkbox-option">
						<input type="checkbox" bind:checked={answers.lifeEvents.divorced} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LIFE_EVENTS.OPTIONS.DIVORCED()}</span>
					</label>
					<label class="checkbox-option">
						<input type="checkbox" bind:checked={answers.lifeEvents.spouseDeath} />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LIFE_EVENTS.OPTIONS.SPOUSE_DEATH()}</span>
					</label>
				</div>
			</div>

			<!-- Question 4: W9/1099 -->
			<div class="question-container colored-section">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.W9_1099.QUESTION()}</p>
				<div class="radio-group horizontal">
					<label class="radio-option">
						<input type="radio" name="w91099" bind:group={answers.received1099} value={true} />
						<span>{$t.FORM.YES_OR_NO_INPUT.YES()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="w91099" bind:group={answers.received1099} value={false} />
						<span>{$t.FORM.YES_OR_NO_INPUT.NO()}</span>
					</label>
				</div>
			</div>

			<!-- Question 5: SSN/ITIN -->
			<div class="question-container">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.SSN_ITIN.QUESTION()}</p>
				<div class="radio-group">
					<label class="radio-option">
						<input type="radio" name="taxId" bind:group={answers.taxIdType} value="ssn" />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.SSN_ITIN.OPTIONS.SSN()}</span>
					</label>
					<label class="radio-option">
						<input type="radio" name="taxId" bind:group={answers.taxIdType} value="itin" />
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.SSN_ITIN.OPTIONS.ITIN()}</span>
					</label>
				</div>
			</div>

			<!-- Question 6: Filing Year -->
			<div class="question-container colored-section">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.QUESTION()}</p>
				<div class="radio-group">
					<label class="radio-option">
						<input
							type="radio"
							name="filingYear"
							bind:group={answers.filingYear}
							value="2025_only"
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.OPTIONS.ONLY_2025()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="filingYear"
							bind:group={answers.filingYear}
							value="multiple_years"
						/>
						<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.OPTIONS.MULTIPLE()}</span>
					</label>
				</div>
			</div>

			<!-- Question 7: Language Assistance -->
			<div class="question-container">
				<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LANGUAGE_ASSISTANCE.QUESTION()}</p>
				<div class="radio-group horizontal">
					<label class="radio-option">
						<input
							type="radio"
							name="languageHelp"
							bind:group={answers.needsNonEnglishSpanishHelp}
							value={true}
						/>
						<span>{$t.FORM.YES_OR_NO_INPUT.YES()}</span>
					</label>
					<label class="radio-option">
						<input
							type="radio"
							name="languageHelp"
							bind:group={answers.needsNonEnglishSpanishHelp}
							value={false}
						/>
						<span>{$t.FORM.YES_OR_NO_INPUT.NO()}</span>
					</label>
				</div>
			</div>

			<div class="button-container">
				<button type="submit" class="primary-button">
					{$t.FILE_IN_PERSON_QUIZ.SUBMIT_BUTTON()}
				</button>
			</div>

			<div class="button-container">
				<button type="button" class="secondary-button" on:click={handleBack}>
					{$t.FILE_IN_PERSON_QUIZ.BACK_BUTTON()}
				</button>
			</div>
		</form>
	{:else}
		<!-- Results Section -->
		<div class="outcome-container">
			{#if outcome === 'in_person_good_fit' || outcome === 'in_person_still_suited'}
				<div class="outcome-copy">
					<p>{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.IN_PERSON_GOOD_FIT.COPY()}</p>
				</div>
				<div class="button-container">
					<a href={fileInPersonLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.IN_PERSON_GOOD_FIT.BUTTON()}
					</a>
				</div>
			{:else if outcome === 'online_with_support'}
				<div class="outcome-copy">
					<p>{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_WITH_SUPPORT.COPY()}</p>
				</div>
				<div class="button-container">
					<a href={onlineWithSupportLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_WITH_SUPPORT.PRIMARY_BUTTON()}
					</a>
				</div>
				<div class="in-person-fallback">
					<a href={fileInPersonLink} target="_blank" class="text-link">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_WITH_SUPPORT.IN_PERSON_LINK()}
					</a>
				</div>
			{:else if outcome === 'optimized_diy'}
				<div class="outcome-copy">
					<p>{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.OPTIMIZED_DIY.COPY()}</p>
				</div>
				<div class="button-container">
					<a href={diyFilingLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.OPTIMIZED_DIY.BUTTONS.DIY()}
					</a>
				</div>
				<div class="button-container">
					<a href={freeTaxUsaLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.OPTIMIZED_DIY.BUTTONS.SUPPORT_25()}
					</a>
				</div>
				<div class="button-container">
					<a href={paidFilingLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.OPTIMIZED_DIY.BUTTONS.PAID()}
					</a>
				</div>
				<div class="in-person-fallback">
					<a href={fileInPersonLink} target="_blank" class="text-link">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.OPTIMIZED_DIY.IN_PERSON_LINK()}
					</a>
				</div>
			{:else}
				<!-- online_and_other -->
				<div class="outcome-copy">
					<p>{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_AND_OTHER.COPY()}</p>
				</div>
				<div class="button-container">
					<a href={myFreeTaxesLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_AND_OTHER.BUTTONS.FREE_ONLINE()}
					</a>
				</div>
				<div class="button-container">
					<a href={freeTaxUsaLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_AND_OTHER.BUTTONS.SUPPORT_25()}
					</a>
				</div>
				<div class="button-container">
					<a href={paidFilingLink} target="_blank" class="primary-button">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_AND_OTHER.BUTTONS.PAID()}
					</a>
				</div>
				<div class="in-person-fallback">
					<a href={fileInPersonLink} target="_blank" class="text-link">
						{$t.FILE_IN_PERSON_QUIZ.OUTCOMES.ONLINE_AND_OTHER.IN_PERSON_LINK()}
					</a>
				</div>
			{/if}

			<div class="button-container back-button">
				<button type="button" class="secondary-button" on:click={handleBack}>
					{$t.FILE_IN_PERSON_QUIZ.BACK_BUTTON()}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.quiz-container {
		padding: 1rem;
	}

	.intro {
		padding: 1rem 0;
		font-style: italic;
	}

	.intro p {
		margin: 0;
		line-height: 1.5;
	}

	.question-container {
		padding: 1em;
	}

	.colored-section {
		background-color: #faf9f9;
	}

	.question {
		margin: 0;
		padding: 0.5em 0;
		font-size: 1.3em;
	}

	.radio-group,
	.checkbox-group {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		padding: 0.5em 0;
	}

	.radio-group.horizontal {
		flex-direction: row;
		gap: 1.5em;
	}

	.radio-option,
	.checkbox-option {
		display: flex;
		align-items: center;
		gap: 0.5em;
		font-size: 1.1em;
		cursor: pointer;
	}

	.radio-option input,
	.checkbox-option input {
		width: 1.2em;
		height: 1.2em;
		cursor: pointer;
	}

	.button-container {
		padding: 0.5em 0;
		display: flex;
		justify-content: center;
	}

	.button-container.back-button {
		margin-top: 1em;
	}

	.secondary-button {
		background-color: transparent;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
		padding: 0.5em 1.5em;
		font-size: 1em;
		font-weight: bold;
		cursor: pointer;
		text-transform: uppercase;
		font-family: inherit;
	}

	.secondary-button:hover {
		background-color: var(--primary-color);
		color: white;
	}

	.outcome-container {
		padding: 1rem 0;
	}

	.outcome-copy {
		padding: 1rem;
		background-color: #faf9f9;
		margin-bottom: 1rem;
	}

	.outcome-copy p {
		margin: 0;
		font-size: 1.2em;
		line-height: 1.5;
	}

	.in-person-fallback {
		text-align: center;
		padding: 1rem 0;
	}

	.text-link {
		color: var(--primary-color);
		text-decoration: underline;
		font-size: 0.95em;
	}

	.text-link:hover {
		text-decoration: none;
	}

	.primary-button {
		width: 18em;
		text-align: center;
	}
</style>
