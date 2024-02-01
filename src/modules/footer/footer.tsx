import { type FC } from 'react'

import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'
export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container className={styles.footerContent}>
				<span className={styles.footerCopyright}>© EventLoop, 2024</span>
				<p className={styles.footerDesc}>
					Cвидетельство о регистрации средства массовой информации Эл № ФС77 - 37229 от 14 августа
					2009 г. Выдано Федеральной службой по надзору в сфере связи, информационных технологий и
					массовых коммуникаций (Роскомнадзор).
				</p>
			</Container>
		</footer>
	)
}
