import { type FC, useState } from 'react'

import styles from './index.module.scss'
import cnBind from 'classnames/bind'

type PaginationProps = {
	pagesCount: number
	activePage: number
}

export const Pagination: FC<PaginationProps> = ({ pagesCount, activePage }) => {
	const cx = cnBind.bind(styles)

	const [pageNumber, setPageNumber] = useState<number>(activePage)
	return (
		<>
			<ul className={styles.pagination}>
				<li
					onClick={() => {
						if (pageNumber === pagesCount) return
						setPageNumber(0)
					}}
				>
					в начало
				</li>
				{Array(5)
					.fill(null)
					.map((count, idx) => (
						<li
							className={cx({ activeCount: pageNumber === idx + activePage - 2 })}
							key={idx}
							onClick={() => setPageNumber(idx + activePage - 2)}
						>
							{idx + 1}
						</li>
					))}

				<li
					onClick={() => {
						if (pageNumber === pagesCount) return
						setPageNumber(pageNumber + 1)
					}}
				>
					дальше
				</li>
			</ul>
		</>
	)
}
