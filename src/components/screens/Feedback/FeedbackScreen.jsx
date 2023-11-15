'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './FeedbackScreen.module.scss'

import { Heading } from '@/components/ui/Heading/Heading'
import { Wrapper } from '@/components/ui/Wrapper/Wrapper'

const dispatchStatusText = {
	success: {
		label: 'success',
		text: 'Заявка отправлена успешна! В ближайшее время мы вам перезвоним!'
	},
	error: {
		label: 'error',
		text: 'Произошла ошибка, пожалуйста, повторите попытку позже.'
	}
}

export function FeedbackScreen() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const [dispatchStatus, setDispatchStatus] = useState(null)

	async function onSubmit(data) {
		let body = ''
		for (const key in data) {
			body += encodeURIComponent(`<strong>${key}:</strong> ${data[key]}\n`)
		}
		const response = await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.ok) {
			const resultResponse = await response.json()
			if (resultResponse.ok) {
				reset({
					Имя: '',
					Телефон: ''
				})
				setDispatchStatus('success')
				setTimeout(() => {
					setDispatchStatus(null)
				}, 5000)
			} else {
				setDispatchStatus('error')
				setTimeout(() => {
					setDispatchStatus(null)
				}, 5000)
			}
		} else {
			setDispatchStatus('error')
			setTimeout(() => {
				setDispatchStatus(null)
			}, 5000)
		}
	}

	return (
		<Wrapper className={styles.Container}>
			<Heading className={styles.Heading} size={1}>
				Обратная связь
			</Heading>
			<div
				className={clsx(
					styles.DispatchStatus,
					dispatchStatus === dispatchStatusText[dispatchStatus]?.label &&
						styles.Active
				)}
			>
				<svg className={styles.DispatchStatusIcon}>
					{dispatchStatusText[dispatchStatus]?.label === 'success' ? (
						<use href='/images/sprite.svg#success' />
					) : (
						<use href='/images/sprite.svg#error' />
					)}
				</svg>
				<p className={styles.DispatchStatusText}>
					{dispatchStatusText[dispatchStatus]?.text}
				</p>
			</div>

			<form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
				<label className={clsx(styles.Label, errors['Имя'] && styles.Error)}>
					{errors['Имя'] ? errors['Имя'].message : 'Ваше Имя'}
				</label>
				<input
					className={clsx(styles.Field, errors['Имя'] && styles.Error)}
					type='text'
					placeholder='Ваше имя'
					{...register('Имя', {
						required: { value: true, message: 'Это обязательное поле' },
						minLength: { value: 2, message: 'Слишком мало символов' },
						maxLength: { value: 20, message: 'Слишком много символов' }
					})}
				/>

				<label
					className={clsx(styles.Label, errors['Телефон'] && styles.Error)}
				>
					{errors['Телефон'] ? errors['Телефон'].message : 'Ваш номер телефона'}
				</label>
				<input
					className={clsx(styles.Field, errors['Телефон'] && styles.Error)}
					type='tel'
					placeholder='Ваш номер телефона'
					{...register('Телефон', {
						required: { value: true, message: 'Это обязательное поле' },
						minLength: { value: 11, message: 'Слишком мало символов' },
						maxLength: { value: 20, message: 'Слишком много символов' },
						pattern: {
							value: /^[\d()+-]+$/,
							message: 'Введите корректный номер'
						}
					})}
				/>

				<button
					className={styles.SubmitButton}
					type='submit'
					disabled={!isValid}
				>
					Отправить
				</button>
			</form>
		</Wrapper>
	)
}
