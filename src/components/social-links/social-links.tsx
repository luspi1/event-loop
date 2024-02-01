import { type FC } from 'react'

import cn from 'classnames'

import { VkSocialSvg } from 'src/UI/icons/vkSocialSVG'
import { OkSocialSvg } from 'src/UI/icons/okSocialSVG'
import { TelegramSocialSvg } from 'src/UI/icons/telegramSocialSVG'

import styles from './index.module.scss'

type SocialLinksProps = {
	className?: string
}
export const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
	return (
		<ul className={cn(styles.socialLinks, className)}>
			<li>
				<a href='#'>
					<VkSocialSvg />
				</a>
			</li>
			<li>
				<a href='#'>
					<OkSocialSvg />
				</a>
			</li>
			<li>
				<a href='#'>
					<TelegramSocialSvg />
				</a>
			</li>
		</ul>
	)
}
