import React, { type FC, type PropsWithChildren } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'
import styled from 'styled-components'

type PageContentProps = PropsWithChildren<{
	$padding?: string
	$maxWidth?: string
	$background?: string
	$margin?: string
}>

const StyledPageContent = styled.div<PageContentProps>`
	padding: ${({ $padding }) => $padding ?? '30px 50px 45px 30px'};
	margin: ${({ $margin }) => $margin ?? '0 0 100px 0'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? '980px'};
	background: ${({ $background }) => $background ?? '#ffffff'};
`

export const PageContent: FC<React.HTMLAttributes<HTMLDivElement> & PageContentProps> = (props) => {
	return <StyledPageContent {...props} className={cn(styles.pageContent, props.className)} />
}
