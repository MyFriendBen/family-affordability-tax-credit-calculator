<script lang="ts">
	import t, { locale } from '$lib/i18n/i18n-svelte';
	import { fly } from 'svelte/transition';
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
	export let onClose: () => void;

	const TOTAL_QUESTIONS = 7;

	let currentQuestion = 1; // 1-7 for questions, 8 for results
	let answers: QuizAnswers = createDefaultAnswers();
	let outcome: FilingOutcome = 'online_and_other';
	let direction: 'forward' | 'back' = 'forward';

	// Set care worker status from the initial form (don't ask again)
	$: answers.caresForOtherChildren = isCareWorker;

	$: showingResult = currentQuestion > TOTAL_QUESTIONS;

	function handleNext() {
		direction = 'forward';
		if (currentQuestion < TOTAL_QUESTIONS) {
			currentQuestion++;
		} else if (currentQuestion === TOTAL_QUESTIONS) {
			// Calculate outcome and show results
			outcome = determineFilingOutcome(answers, yearlyIncome);
			currentQuestion++;
		}
	}

	function handleBack() {
		direction = 'back';
		if (currentQuestion > 1) {
			currentQuestion--;
		} else {
			onClose();
		}
	}

	function handleClose() {
		onClose();
	}

	// Transition parameters based on direction
	$: inX = direction === 'forward' ? 300 : -300;
	$: outX = direction === 'forward' ? -300 : 300;

	// Link getters
	$: fileInPersonLink = getFileInPersonLink(whiteLabel);
	$: onlineWithSupportLink = getOnlineWithSupportLink();
	$: diyFilingLink = getDiyFilingLink();
	$: freeTaxUsaLink = getFreeTaxUsaLink();
	$: myFreeTaxesLink = getMyFreeTaxesLink();
	$: paidFilingLink = getPaidFilingOptionsLink($locale);
</script>

<div class="quiz-container">
	{#if !showingResult}
		<!-- Intro text on first question -->
		{#if currentQuestion === 1}
			<div class="intro">
				<p>{$t.FILE_IN_PERSON_QUIZ.INTRO()}</p>
			</div>
		{/if}

		<!-- Fixed height container for questions -->
		<div class="questions-wrapper">
			<!-- Question 1: Computer Comfort -->
			{#if currentQuestion === 1}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
					<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.QUESTION()}</p>
					<div class="radio-group">
						<label class="radio-option">
							<input type="radio" name="computerComfort" bind:group={answers.computerComfort} value={1} />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['1']()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="computerComfort" bind:group={answers.computerComfort} value={2} />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['2']()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="computerComfort" bind:group={answers.computerComfort} value={3} />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['3']()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="computerComfort" bind:group={answers.computerComfort} value={4} />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['4']()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="computerComfort" bind:group={answers.computerComfort} value={5} />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.COMPUTER_COMFORT.SCALE['5']()}</span>
						</label>
					</div>
				</div>
			{/if}

			<!-- Question 2: Tax Filing Comfort -->
			{#if currentQuestion === 2}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
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
			{/if}

			<!-- Question 3: Life Events -->
			{#if currentQuestion === 3}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
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
			{/if}

			<!-- Question 4: W9/1099 -->
			{#if currentQuestion === 4}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
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
			{/if}

			<!-- Question 5: SSN/ITIN -->
			{#if currentQuestion === 5}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
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
			{/if}

			<!-- Question 6: Filing Year -->
			{#if currentQuestion === 6}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
					<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.QUESTION()}</p>
					<div class="radio-group">
						<label class="radio-option">
							<input type="radio" name="filingYear" bind:group={answers.filingYear} value="2025_only" />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.OPTIONS.ONLY_2025()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="filingYear" bind:group={answers.filingYear} value="multiple_years" />
							<span>{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.FILING_YEAR.OPTIONS.MULTIPLE()}</span>
						</label>
					</div>
				</div>
			{/if}

			<!-- Question 7: Language Assistance -->
			{#if currentQuestion === 7}
				<div
					class="question-container"
					in:fly={{ x: inX, duration: 300 }}
					out:fly={{ x: outX, duration: 300 }}
				>
					<p class="question">{$t.FILE_IN_PERSON_QUIZ.QUESTIONS.LANGUAGE_ASSISTANCE.QUESTION()}</p>
					<div class="radio-group horizontal">
						<label class="radio-option">
							<input type="radio" name="languageHelp" bind:group={answers.needsNonEnglishSpanishHelp} value={true} />
							<span>{$t.FORM.YES_OR_NO_INPUT.YES()}</span>
						</label>
						<label class="radio-option">
							<input type="radio" name="languageHelp" bind:group={answers.needsNonEnglishSpanishHelp} value={false} />
							<span>{$t.FORM.YES_OR_NO_INPUT.NO()}</span>
						</label>
					</div>
				</div>
			{/if}
		</div>

		<!-- Navigation buttons -->
		<div class="nav-buttons">
			<button type="button" class="nav-button back" on:click={handleBack}>
				{$t.FILE_IN_PERSON_QUIZ.BACK_BUTTON()}
			</button>
			<button type="button" class="nav-button next" on:click={handleNext}>
				{#if currentQuestion === TOTAL_QUESTIONS}
					{$t.FILE_IN_PERSON_QUIZ.SUBMIT_BUTTON()}
				{:else}
					{$t.FILE_IN_PERSON_QUIZ.NEXT_BUTTON()}
				{/if}
			</button>
		</div>
	{:else}
		<!-- Results Section -->
		<div
			class="outcome-container"
			in:fly={{ x: inX, duration: 300 }}
		>
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

			<div class="nav-buttons result-nav">
				<button type="button" class="nav-button back" on:click={handleBack}>
					{$t.FILE_IN_PERSON_QUIZ.BACK_BUTTON()}
				</button>
				<button type="button" class="nav-button close" on:click={handleClose}>
					{$t.FILE_IN_PERSON_QUIZ.CLOSE_BUTTON()}
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.quiz-container {
		padding: 1rem 0;
		overflow: hidden;
	}

	.intro {
		padding: 0 0 1rem 0;
	}

	.intro p {
		margin: 0;
		line-height: 1.5;
		font-size: 1.1em;
	}

	.questions-wrapper {
		position: relative;
		min-height: 280px;
		overflow: hidden;
	}

	.question-container {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 0.5em 0;
	}

	.question {
		margin: 0;
		padding: 0.5em 0;
		font-size: 1.2em;
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

	.nav-buttons {
		display: flex;
		justify-content: space-between;
		gap: 1em;
		padding: 1em 0;
		margin-top: 0.5em;
	}

	.nav-buttons.result-nav {
		justify-content: center;
		gap: 2em;
	}

	.nav-button {
		padding: 0.6em 1.5em;
		font-size: 1em;
		font-weight: bold;
		cursor: pointer;
		text-transform: uppercase;
		font-family: inherit;
		border: 2px solid var(--primary-color);
	}

	.nav-button.next {
		background-color: var(--primary-color);
		color: white;
	}

	.nav-button.next:hover {
		opacity: 0.9;
	}

	.nav-button.back,
	.nav-button.close {
		background-color: transparent;
		color: var(--primary-color);
	}

	.nav-button.back:hover,
	.nav-button.close:hover {
		background-color: var(--primary-color);
		color: white;
	}

	.outcome-container {
		padding: 0.5rem 0;
	}

	.outcome-copy {
		padding: 1rem;
		background-color: #faf9f9;
		margin-bottom: 1rem;
	}

	.outcome-copy p {
		margin: 0;
		font-size: 1.1em;
		line-height: 1.5;
	}

	.button-container {
		padding: 0.5em 0;
		display: flex;
		justify-content: center;
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
